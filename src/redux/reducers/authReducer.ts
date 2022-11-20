import { ActionTypes } from "../constans/action-types";
import { AnyAction} from "redux"

const initialState = {
    authState: false,
}

// jeżeli mamy 1sze wywołanie reducera i stan jeszcze nie istnieje, zostanie przyjęty initialState
// jeżeli faktyczny stan już istinieje (wywołanie reducera #n, gdzie n>1) to po prostu zajmie on miejsce w parametrze
export const authReducer = (state=initialState, action:AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_AUTH_STATE:
            return {
                authState: action.payload
            };
        default: 
            return state;
    }
};