import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './helpers/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setAuthState } from './redux/actions/authActions';
import CartPage from './components/CartPage/CartPage';
import ProductCategoryPage from './components/ProductCategoryPage/ProductCategoryPage';

function App() {
	const dispatch = useDispatch();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch(setAuthState(true));
		} else {
			dispatch(setAuthState(false));
		}
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route
						path="/electronics"
						element={<ProductCategoryPage category="electronics" />}
					/>
					<Route
						path="/jewelery"
						element={<ProductCategoryPage category="jewelery" />}
					/>
					<Route
						path="/mans"
						element={<ProductCategoryPage category="men's clothing" />}
					/>
					<Route
						path="/womans"
						element={<ProductCategoryPage category="women's clothing" />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
