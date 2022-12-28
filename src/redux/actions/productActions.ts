import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { InitialState, Product } from '../../helpers/interfaces';
import axios from 'axios';
import { ActionTypes } from '../constans/action-types';

export const fetchCategories = (): ThunkAction<
	void,
	InitialState,
	unknown,
	AnyAction
> => {
	return async (dispatch) => {
		const response = await axios.get(
			'https://fakestoreapi.com/products/categories'
		);
		dispatch({
			type: ActionTypes.FETCH_CATEGORIES,
			payload: response.data,
		});
	};
};

export const fetchImages = (
	categories: string[]
): ThunkAction<void, InitialState, unknown, AnyAction> => {
	return async (dispatch) => {
		const productList = await fetchImagesSeparately(categories);
		const imageList = productList.map((el) => el.data[0].image);
		dispatch({ type: ActionTypes.FETCH_IMAGES, payload: imageList });
	};
};

const fetchImagesSeparately = async (categories: string[]) => {
	const product1 = await axios.get(
		`https://fakestoreapi.com/products/category/${categories[0]}?limit=1`
	);
	const product2 = await axios.get(
		`https://fakestoreapi.com/products/category/${categories[1]}?limit=1`
	);
	const product3 = await axios.get(
		`https://fakestoreapi.com/products/category/${categories[2]}?limit=1`
	);
	const product4 = await axios.get(
		`https://fakestoreapi.com/products/category/${categories[3]}?limit=1`
	);
	const objectList = [product1, product2, product3, product4];

	return objectList;
};

export const fetchProducts = (
	quantity: number
): ThunkAction<void, InitialState, number, AnyAction> => {
	return async (dispatch) => {
		const response = await axios.get(
			`https://fakestoreapi.com/products?limit=${quantity}`
		);
		dispatch({
			type: ActionTypes.FETCH_PRODUCTS,
			payload: response.data,
		});
	};
};

export const setProduct = (product: Product) => {
	return {
		type: ActionTypes.SET_PRODUCT,
		payload: product,
	};
};

export const removeProduct = (product: Product) => {
	return {
		type: ActionTypes.REMOVE_PRODUCT,
		payload: product,
	};
};