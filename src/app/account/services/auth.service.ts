/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
	Auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	UserCredential,
} from '@angular/fire/auth';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData: any;

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
}
