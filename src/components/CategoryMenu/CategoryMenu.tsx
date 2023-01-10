import React, { useEffect } from 'react';
import { InitialState, State } from '../../helpers/interfaces';
import { useAppDispatch } from '../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchImages } from '../../redux/actions/productActions';
import CategoryTile from '../CategoryTile/CategoryTile';
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ categories }: { categories: string[] | [] }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			fetchImages(categories) as ThunkDispatch<InitialState, unknown, AnyAction>
		);
	}, []);

	const images = useSelector(
		(state: State) => state.productState.fetchedImages
	);

	return (
		<Paper elevation={1} sx={{ my: '2rem' }}>
			{images.length > 0 &&
				categories.map((el, i) => {
					let route: string = el;
					if (el === `men's clothing`) route = '/mans';
					if (el === `women's clothing`) route = '/womans';
					return (
						<Link to={route} key={i}>
							<CategoryTile category={el} image={images[i]} key={i} />
						</Link>
					);
				})}
		</Paper>
	);
};
export default CategoryMenu;
