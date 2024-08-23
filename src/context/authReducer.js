import { types } from "./Types/types.js";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      // Cuando la acción es LOGIN, el estado se actualiza a { logged: true }
      return {
        logged: true,
      };
    case types.LOGOUT:
      // Cuando la acción es LOGOUT, el estado se actualiza a { logged: false }
      return {
        logged: false,
      };
    case types.REGISTER:
      // Cuando la acción es REGISTER, el estado se actualiza a { logged: true }
      return {
        logged: true,
      };
    default:
      // Si la acción no coincide con los casos anteriores, se retorna el estado actual sin cambios
      return state;
  }
};
