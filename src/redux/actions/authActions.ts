import { ActionTypes } from '../constans/action-types';

export const setAuthState = (authState: boolean) => {
	return {
		type: ActionTypes.SET_AUTH_STATE,
		payload: authState, 
	};
};