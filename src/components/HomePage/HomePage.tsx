import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { fetchCategories } from '../../redux/actions/productActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { InitialState, State } from '../../helpers/interfaces';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import { useSelector } from 'react-redux';
import Bestsellers from '../Bestsellers/Bestsellers';

const HomePage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(
			fetchCategories() as ThunkDispatch<InitialState, unknown, AnyAction>
		);
	}, []);

	const categories = useSelector(
		(state: State) => state.productState.fetchedCategories
	);

	return (
		<>
			<Typography
				variant="h2"
				align="center"
				sx={{ fontSize: '2rem', mt: '2rem' }}
			>
				Browse and buy your favorite electronics, jewellery and clothes. All in
				one place.
			</Typography>
			{categories.length > 1 && <CategoryMenu categories={categories} />}
			<Typography
				variant="h3"
				align="center"
				sx={{
					fontSize: '1.5rem',
					borderBottom: '1px solid orange',
					mb: '.5rem',
					fontWeight: '100',
				}}
			>
				Our bestsellers:
			</Typography>
			<Bestsellers />
		</>
	);
};

export default HomePage;
