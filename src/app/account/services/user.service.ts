import { Injectable } from '@angular/core';
import {
	Firestore,
	doc,
	getDoc,
	setDoc,
	updateDoc,
} from '@angular/fire/firestore';
import { IUser, IUserAccount } from '../interfaces/user.interface';

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

	updateById = (userId: string, account: IUserAccount): Promise<void> => {
		const docInstance = doc(this.firestore, 'users', userId);
		return updateDoc(docInstance, { account });
	};
}
