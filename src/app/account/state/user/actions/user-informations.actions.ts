import { createActionGroup, props } from '@ngrx/store';
import { IUser } from '../../../interfaces/user.interface';

export const UserInformationsActions = createActionGroup({
	source: 'User init',
	events: {
		'Add user': props<{
			payload: { userId: string; data: IUser };
		}>(),
		'Add user Success': props<{
			payload: { userId: string; data: IUser };
		}>(),
		'Add user Failure': props<{
			payload: { error: unknown };
		}>(),
	},
});
