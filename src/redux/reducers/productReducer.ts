import { AnyAction } from 'redux';
import { ActionTypes } from '../constans/action-types';

const initialState = {
	fetchedCategories: [''],
	fetchedProduct: [],
	fetchedImages: [],
	selectedProducts: [{ id: 0 }],
};

export const productReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_CATEGORIES:
			return { ...state, fetchedCategories: action.payload };
		case ActionTypes.FETCH_IMAGES:
			return { ...state, fetchedImages: action.payload };
		case ActionTypes.FETCH_PRODUCTS:
			return { ...state, fetchedProducts: action.payload };
		case ActionTypes.SET_PRODUCT:
			return {
				...state,
				selectedProducts: [...state.selectedProducts, action.payload],
			};
		case ActionTypes.REMOVE_PRODUCT: {
			const indexOfObjectToRemove = state.selectedProducts.findIndex(
				(productAlreadyInState) =>
					productAlreadyInState.id === action.payload.id
			);
			const CopyOfOldSelectedProductsArray = [...state.selectedProducts];
			CopyOfOldSelectedProductsArray.splice(indexOfObjectToRemove, 1);
			return {
				...state,
				selectedProducts: CopyOfOldSelectedProductsArray,
			};
		}
		default:
			return state;
	}
};
