import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { fetchProducts } from '../../redux/actions/productActions';
import { InitialState, State } from '../../helpers/interfaces';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';
import ProductTile from '../ProductTile/ProductTile';

const Bestsellers = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			fetchProducts(10) as ThunkDispatch<InitialState, unknown, AnyAction>
		);
	}, []);

	const products = useSelector(
		(state: State) => state.productState.fetchedProducts
	);
	return (
		<Card>
			{products?.length > 1 &&
				products.map((el, i) => {
					return <ProductTile product={el} key={i} />;
				})}
		</Card>
	);
};

export default Bestsellers;
