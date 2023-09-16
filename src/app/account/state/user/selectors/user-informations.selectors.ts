import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, userFeatureKey } from '../reducers/user.reducer';

export const selectUserFeature =
	createFeatureSelector<IUserState>(userFeatureKey);

export const selectUserInformations = createSelector(
	selectUserFeature,
	(state: IUserState) => state.informations,
);
