import React from 'react';
import { Card, Paper, TextField, Typography, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth } from '../../helpers/firebaseConfig';
import { RegisterFormData } from '../../helpers/interfaces';

const RegisterPage = () => {
	const { register, handleSubmit } = useForm<RegisterFormData>();

	const submitHandler = (data: RegisterFormData) => {
		if (data.password === data.password2) {
			createUserWithEmailAndPassword(auth, data.email, data.password)
				.then()
				.catch(() => alert('Try again!'));
		} else {
			alert('Passwords are different!');
		}
	};

	return (
		<Card
			component={Paper}
			sx={{ display: 'block', mx: 'auto', maxWidth: '35%', my: '1rem' }}
		>
			<Typography variant="h2" align="center" sx={{ fontSize: '2rem' }}>
				Register new account
			</Typography>
			<form
				style={{
					margin: 'auto',
					marginTop: '.5rem',
					marginBottom: '.5rem',
					display: 'flex',
					flexDirection: 'column',
				}}
				onSubmit={handleSubmit(submitHandler)}
			>
				<TextField
					variant="outlined"
					label="email"
					type="email"
					sx={{ display: 'block', mx: 'auto', my: '.3rem' }}
					{...register('email', { required: true })}
				/>
				<TextField
					variant="outlined"
					label="password"
					type="password"
					sx={{ display: 'block', mx: 'auto', my: '.3rem' }}
					{...register('password', { required: true })}
				/>
				<TextField
					variant="outlined"
					label="password"
					type="password"
					sx={{ display: 'block', mx: 'auto', my: '.3rem' }}
					{...register('password2', { required: true })}
				/>
				<Button
					variant="contained"
					type="submit"
					sx={{
						display: 'block',
						mx: 'auto',
						my: '.3rem',
						bgcolor: '#FC766AFF',
					}}
				>
					Register
				</Button>
			</form>
		</Card>
	);
};

export default RegisterPage;