/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
	Auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	UserCredential,
} from '@angular/fire/auth';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData: any;
	errorMessage!: string | null;

	constructor(private auth: Auth) {
		onAuthStateChanged(this.auth, (user: any) => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user') as string);
			} else {
				localStorage.setItem('user', 'null');
				JSON.parse(localStorage.getItem('user') as string);
			}
		});
	}

	loginWithPopup(
		provider: GoogleAuthProvider | GithubAuthProvider,
	): Promise<UserCredential> {
		return signInWithPopup(this.auth, provider);
	}

	register(email: string, password: string): Promise<UserCredential> {
		return createUserWithEmailAndPassword(this.auth, email, password);
	}

	login(email: string, password: string): Promise<UserCredential> {
		return signInWithEmailAndPassword(this.auth, email, password);
	}

	logout(): Promise<void> {
		return signOut(this.auth);
	}

	setErrorMessage(errorCode: string) {
		if (
			errorCode === 'auth/wrong-password' ||
			errorCode === 'auth/user-not-found'
		) {
			this.errorMessage =
				'Your credentials are incorrect. Please double-check your login details and try again.';
		} else if (errorCode === 'auth/email-already-in-use') {
			this.errorMessage = 'Email is invalid or already taken';
		}

		return this.errorMessage;
	}

	getAuthLocal() {
		const token = localStorage.getItem('user');
		const user = JSON.parse(token as string);
		return user;
	}
}
