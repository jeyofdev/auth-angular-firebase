import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../../services/user.service';
import { mergeMap } from 'rxjs';
import { UserActions } from '../actions/user-index.actions';

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

	constructor(
		private actions$: Actions,
		private userInformationsService: UserService,
	) {}
}