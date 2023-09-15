import { createReducer } from '@ngrx/store';
import { IUserAccount, IUserProfile } from '../../../interfaces/user.interface';

export const UserInformationsFeatureKey = 'informations';

export interface IUserInformationsState {
	account: IUserAccount;
	profile: IUserProfile;
}

export interface State {
	readonly [UserInformationsFeatureKey]: IUserInformationsState;
}

export const initialUserInformationsState: IUserInformationsState = {
	account: {
		lastLogin: '',
		createdAt: '',
	},
	profile: {
		firstname: '',
		lastname: '',
		username: '',
		email: '',
		phone: '',
		avatar: '',
	},
};

export const userInformationsReducer = createReducer(
	initialUserInformationsState,
);
