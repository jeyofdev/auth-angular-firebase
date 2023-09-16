import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { IUser } from '../interfaces/user.interface';
import { getDoc } from 'firebase/firestore';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private firestore: Firestore) {}

	async getUserById(userId: string): Promise<IUser> {
		const docInstance = doc(this.firestore, 'users', userId);
		const docRef = await getDoc(docInstance);

		if (docRef.exists()) {
			return docRef.data() as Promise<IUser>;
		} else {
			throw new Error('User does not exist');
		}
	}

	async addUser(userId: string, newUser: IUser): Promise<void> {
		return setDoc(doc(this.firestore, 'users', userId), newUser);
	}
}
