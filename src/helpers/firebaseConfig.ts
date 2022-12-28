import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC7dZSKlnvqZHGwe8JamPkMCujAJX84TzA',
	authDomain: 'sda-market-49159.firebaseapp.com',
	projectId: 'sda-market-49159',
	storageBucket: 'sda-market-49159.appspot.com',
	messagingSenderId: '380187336878',
	appId: '1:380187336878:web:f8498a2901cd35ffe10d3f',
	measurementId: 'G-JH79L0ER95',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
