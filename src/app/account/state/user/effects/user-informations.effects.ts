import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../../services/user.service';
import { mergeMap } from 'rxjs';
import { UserActions } from '../actions/user-index.actions';
import { AuthService } from '../../../services/auth.service';

@Injectable()
export class UserInformationsEffects {
	addUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(UserActions.informations.addUser),
			mergeMap(async ({ payload: { userId, data } }) =>
				this.userInformationsService
					.addUser(userId, data)
					.then(() =>
						UserActions.informations.addUserSuccess({
							payload: { userId, data },
						}),
					)
					.catch(error =>
						UserActions.informations.addUserFailure({
							payload: { error: error.body.error },
						}),
					),
			),
		);
	});

	getUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(UserActions.informations.loadUser),
			mergeMap(({ payload: { userId } }) =>
				this.userInformationsService
					.getUserById(userId)
					.then(data =>
						UserActions.informations.loadUserSuccess({
							payload: { data },
						}),
					)
					.catch(error =>
						UserActions.informations.loadUserFailure({
							payload: { error: error.body.error },
						}),
					),
			),
		);
	});

	logoutUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(UserActions.informations.logoutUser),
			mergeMap(async () =>
				this.authService
					.logout()
					.then(() => UserActions.informations.logoutUserSuccess())
					.catch(error =>
						UserActions.informations.logoutUserFailure({
							payload: { error: error.body.error },
						}),
					),
			),
		);
	});

	updateUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(UserActions.informations.updateUser),
			mergeMap(async ({ payload: { userId, account } }) =>
				this.userInformationsService
					.updateById(userId, account)
					.then(() =>
						UserActions.informations.updateUserSuccess({
							payload: { userId, account },
						}),
					)
					.catch(error =>
						UserActions.informations.updateUserFailure({
							payload: { error: error.body.error },
						}),
					),
			),
		);
	});

	constructor(
		private actions$: Actions,
		private userInformationsService: UserService,
		private authService: AuthService,
	) {}
}
