import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    authState: authReducer,
    productState: productReducer,
});

// po lewej nazwa stanu, po prawej przypisujemy reducer zarządzający tym stanem