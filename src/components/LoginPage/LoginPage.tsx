import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Paper, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { LoginFormData } from '../../helpers/interfaces';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../helpers/firebaseConfig';

const LoginPage = () => {
	const { register, handleSubmit } = useForm<LoginFormData>();

	const submitHandler = (data: LoginFormData) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then()
			.catch(() => alert('Try again!'));
	};

	return (
		<Card
			component={Paper}
			sx={{ display: 'block', mx: 'auto', maxWidth: '35%', my: '1rem' }}
		>
			<Typography variant="h2" align="center" sx={{ fontSize: '2rem' }}>
				Log in to use our site
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
					Log in
				</Button>
			</form>

			<Typography
				variant="h2"
				align="center"
				sx={{ fontSize: '1rem', my: '3rem' }}
			>
				No account yet? Register for free now
			</Typography>
			<Link to="/register" style={{ textDecoration: 'none' }}>
				<Button
					variant="contained"
					sx={{
						display: 'block',
						mx: 'auto',
						marginBottom: '.3rem',
						bgcolor: '#FC766AFF',
					}}
				>
					Register
				</Button>
			</Link>
		</Card>
	);
};

export default LoginPage;