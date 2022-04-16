import { initializeApp } from 'firebase/app'

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDENFNKUI3EvxOj9Kh8etaC0M5wLUpwHmg',
	authDomain: 'iss-tracker-adcf9.firebaseapp.com',
	projectId: 'iss-tracker-adcf9',
	storageBucket: 'iss-tracker-adcf9.appspot.com',
	messagingSenderId: '756987948555',
	appId: '1:756987948555:web:7dbda97b934e61afd1210e',
}

// Initialize Firebase
initializeApp(firebaseConfig)

//init service
export const auth = getAuth()

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const signInWithGooglePopup = () => {
	signInWithPopup(auth, googleProvider)
}

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback)

// export const userAuth = createUserWithEmailAndPassword(auth)

// export const userAuth = (email, password) => {
// 	return createUserWithEmailAndPassword(auth, email, password)
// 		.then((cred) => {
// 			console.log('userCred :', cred.user)
// 		})
// 		.catch((err) => {
// 			console.log(err.message)
// 		})
// }
