import { createReducer, on } from '@ngrx/store';
import { IUserAccount, IUserProfile } from '../../../interfaces/user.interface';
import { UserActions } from '../actions/user-index.actions';

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
	on(
		UserActions.informations.addUser,
		(state, actions): IUserInformationsState => {
			return {
				...state,
				account: actions.payload.data.account,
				profile: actions.payload.data.profile,
			};
		},
	),
	on(
		UserActions.informations.loadUserSuccess,
		(state, actions): IUserInformationsState => {
			return {
				...state,
				account: actions.payload.data.account,
				profile: actions.payload.data.profile,
			};
		},
	),
	on(UserActions.informations.logoutUserSuccess, (): IUserInformationsState => {
		return initialUserInformationsState;
	}),
);
