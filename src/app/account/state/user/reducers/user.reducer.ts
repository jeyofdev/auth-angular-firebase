import { MetaReducer, combineReducers } from '@ngrx/store';
import { isDevMode } from '@angular/core';

import {
	IUserInformationsState,
	UserInformationsFeatureKey,
	initialUserInformationsState,
	userInformationsReducer,
} from './user-informations.reducer';
import { hydration, log } from './user.meta-reducer';

export const userFeatureKey = 'user';

export interface IUserState {
	[UserInformationsFeatureKey]: IUserInformationsState;
}

export const initialUserState: IUserState = {
	[UserInformationsFeatureKey]: initialUserInformationsState,
};

export const reducers = combineReducers(
	{
		[UserInformationsFeatureKey]: userInformationsReducer,
	},
	initialUserState,
);

export const metaReducers: MetaReducer[] = isDevMode()
	? [log, hydration]
	: [hydration];
