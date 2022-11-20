import { ActionTypes } from "../constans/action-types";

export const setAuthState = (authState:boolean) => {
    return {
        type: ActionTypes.SET_AUTH_STATE,
        payload: authState, //true albo false
    }
}

// KREATOR AKCJI
// funkcja która upraszcza nam robotę i uszczupla kod w komponentach, po podaniu argumentu, konfiguruje i zwraca gotowy do DISPATCH obiekt akcji

// ZWRACA obiekt akcji
// OBIEKT AKCJI musi zawierać pole "type", według którego akcja będzie identyfikowana w store i reducerach
// 2gie opcjonalne pole to "payload", tu przekazujemy faktyczne dane, które mają trafić do store