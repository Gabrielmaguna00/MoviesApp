import { useState, createContext, useContext } from 'react'
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { auth, firestore } from './../firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const signUp = async (email, password, name, role) => {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)

		const userRef = doc(firestore, 'users', userCredential.user.uid)
		setDoc(userRef, { email, name, role })
	}

	const logIn = (email, password) =>
		signInWithEmailAndPassword(auth, email, password)

	const logOut = () => signOut(auth)

	const getUserFirestore = async uid => {
		const userRef = doc(firestore, 'users', uid)

		const userSnap = await getDoc(userRef)

		return userSnap.data()
	}

	const setUserWithFirestore = async userFromAuth => {
		const userFromFirestore = await getUserFirestore(userFromAuth.uid)

		const userWithAuthAndFirestore = {
			...userFromFirestore,
			...userFromAuth,
		}

		setUser(userWithAuthAndFirestore)
	}

	onAuthStateChanged(auth, userFromAuth => {
		if (userFromAuth) {
			if (!user) {
				setUserWithFirestore(userFromAuth)
			}
		} else {
			setUser(null)
		}
	})

	return (
		<AuthContext.Provider value={{ user, logIn, signUp, logOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
