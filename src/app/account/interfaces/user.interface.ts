export interface IUser {
	account: IUserAccount;
	profile: IUserProfile;
}

export interface IUserProfile {
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	phone: string;
	avatar: string;
}

export interface IUserAccount {
	lastLogin: string;
	createdAt: string;
}
