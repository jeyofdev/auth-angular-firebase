import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { UserActions } from '../../state/user/actions/user-index.actions';
import { selectUserInformations } from '../../state/user/selectors/user-informations.selectors';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	user!: any;

	constructor(
		private authService: AuthService,
		private store: Store,
		private router: Router,
	) {}

	ngOnInit(): void {
		const connectedUser = this.authService.getAuthLocal();

		this.store.dispatch(
			UserActions.informations.loadUser({
				payload: { userId: connectedUser?.uid },
			}),
		);

		this.store
			.select(selectUserInformations)
			.pipe(
				map(currentUser => {
					this.user = currentUser;
				}),
			)
			.subscribe();
	}

	logout() {
		this.store.dispatch(UserActions.informations.logoutUser());
		this.store
			.select(selectUserInformations)
			.pipe(
				map(() => {
					this.router.navigateByUrl('/account/signin');
				}),
			)
			.subscribe();
	}
}
