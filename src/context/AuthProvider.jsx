// AuthProvider.js
import  { createContext, useReducer, useEffect } from "react";
import { authReducer } from './authReducer.js';
import { types } from "./Types/types.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("token");

    const initialState = {
        logged: false,
        token: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        if (token) {
            dispatch({
                type: types.LOGIN,
                payload: {
                    logged: true,
                    token,
                },
            });
        }
    }, [token, dispatch]);

    const login = async (username, password) => {
        try {
            // Aquí va la lógica para autenticar al usuario, por ejemplo, una llamada a una API
            // Simulando una respuesta de API
            const response = await fakeApiLogin(username, password); // Reemplaza con tu lógica real
            if (response.success) {
                localStorage.setItem("token", response.token);
                dispatch({
                    type: types.LOGIN,
                    payload: { token: response.token },
                });
                return { success: true };
            } else {
                return { success: false, message: response.message };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        dispatch({
            type: types.LOGOUT,
        });
    };

    //const register = async (username, password) => {
        // Implementa la lógica de registro aquí
    //};

    return (
        <AuthContext.Provider value={{
            state,
            login,
            //register,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Simulación de la llamada a la API (para fines de ejemplo)
const fakeApiLogin = async (username, password) => {
    if (username === "user" && password === "pass") {
        return { success: true, token: "fake-jwt-token" };
    } else {
        return { success: false, message: "Credenciales incorrectas" };
    }
};
