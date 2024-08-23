import { createContext, useReducer, useEffect } from "react";
import { useToggle } from "../hooks/useToggle";
import { authReducer } from "../reducer/authReducer";
import { apiFetchFunction } from "../api/fetchApi";
import { types } from "./Types/types";

// Este almacena los datos
export const PageContext = createContext();

// Este engloba al resto de componentes
export const PageContextProvider = ({ children }) => {

    // ! AUTH
    const token = localStorage.getItem("token");

    const initialState = {
        logged: token ? true : false,
        token: token || null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        if (token) {
            dispatch({
                type: types.LOGIN,
                payload: {
                    token,
                },
            });
        }
    }, [token, dispatch]);

    const login = async (values) => {
        try {
            const login = await apiFetchFunction("/login", "POST", values);

            if (login.status == 200) {
                localStorage.setItem("token", login.token);
                dispatch({
                    type: types.LOGIN,
                    payload: { token: login.token },
                });
                return { success: true };
            } else {
                return { success: false, message: login.errors };
            }
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        dispatch({
            type: types.LOGOUT,
        });
    };

    // ! THEME
    const { toggle: darkTheme, handleToggle: setDarkTheme } = useToggle();

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    // ! INSTALLED
    const { toggle: isInstallable, handleToggle: setIsInstallable } = useToggle(false);

    const handleInstalation = (newState) => {
        if (newState) {
            setIsInstallable(newState)
        }
        return isInstallable
    }


    return (
        <PageContext.Provider value={{ darkTheme, state, login, logout, toggleTheme, handleInstalation }}>
            {children}
        </PageContext.Provider>
    );
};
