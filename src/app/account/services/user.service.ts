import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { IUser } from '../interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private firestore: Firestore) {}

	async addUser(userId: string, newUser: IUser): Promise<void> {
		return setDoc(doc(this.firestore, 'users', userId), newUser);
	}
}
