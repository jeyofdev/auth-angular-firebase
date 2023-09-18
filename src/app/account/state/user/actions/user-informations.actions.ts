import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser, IUserAccount } from '../../../interfaces/user.interface';

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

		'Load user': props<{ payload: { userId: string } }>(),
		'Load user Success': props<{ payload: { data: IUser } }>(),
		'Load user Failure': props<{ payload: { error: unknown } }>(),

		'Logout user': emptyProps,
		'Logout user Success': emptyProps,
		'Logout user Failure': props<{ payload: { error: unknown } }>(),

		'Update user': props<{
			payload: { userId: string; account: IUserAccount };
		}>(),
		'Update user Success': props<{
			payload: { userId: string; account: IUserAccount };
		}>(),
		'Update user Failure': props<{ payload: { error: unknown } }>(),
	},
});
