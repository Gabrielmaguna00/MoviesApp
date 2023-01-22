import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	// import from .env the environment variable of the api key ;)
	apiKey: import.meta.env.VITE_FIREBASE_CONFIG_API_KEY,
	authDomain: 'movies-app-c4de5.firebaseapp.com',
	projectId: 'movies-app-c4de5',
	storageBucket: 'movies-app-c4de5.appspot.com',
	messagingSenderId: '977690030585',
	appId: '1:977690030585:web:b8291293c41e48b6e14d28',
}

export const firebaseApp = initializeApp(firebaseConfig)

export const firestore = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
