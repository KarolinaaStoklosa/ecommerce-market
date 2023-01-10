import { Card, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Product } from '../../helpers/interfaces';
import ProductTile from '../ProductTile/ProductTile';

const ProductCategoryPage = ({ category }: { category: string }) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${category}`)
			.then((response) => {
				setProducts(response.data);
			});
	}, [category]);

	return (
		<>
			<Typography
				variant="h2"
				align="center"
				sx={{
					fontSize: '2rem',
					borderBottom: '1px solid orange',
					padding: '1rem',
				}}
			>
				{category.toUpperCase()}
			</Typography>
			<Card component={Paper} sx={{ display: 'block', mx: 'auto' }}>
				{products.length !== 0 &&
					products.map((el: Product, i: number) => {
						return <ProductTile product={el} key={i} />;
					})}
			</Card>
		</>
	);
};

export default ProductCategoryPage;
