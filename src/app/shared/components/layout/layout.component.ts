import { Component, Input, OnInit } from '@angular/core';
import { ProviderEnum } from '../../enum/provider.enum';
import { ISocialProvider } from '../../../core/model/social-provider.model';
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { AuthService } from '../../../account/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../../../account/state/user/actions/user-index.actions';
import { IUser } from '../../../account/interfaces/user.interface';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	@Input({ required: true }) pageTitle!: string;
	@Input() subtitle!: string;
	@Input() redirectLabel!: string;
	@Input({ required: true }) redirectRouterLink!: string;
	@Input({ required: true }) redirectLabelLink!: string;
	@Input() showSocialButtons!: boolean;
	@Input() showBack!: boolean;

	socialProviders!: ISocialProvider[];

	constructor(
		private authService: AuthService,
		private store: Store,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.socialProviders = [
			{
				label: 'Connect with Google',
				icon: 'fa-brands fa-google',
				size: '100%',
				outline: true,
				name: ProviderEnum.GOOGLE,
			},
			{
				label: 'Connect with Github',
				icon: 'fa-brands fa-github',
				size: '100%',
				outline: true,
				name: ProviderEnum.GITHUB,
			},
		];
	}

	loginWithProvider(provider: ProviderEnum): void {
		let currentProvider;
		if (provider === ProviderEnum.GOOGLE) {
			currentProvider = new GoogleAuthProvider();
		} else {
			currentProvider = new GithubAuthProvider();
		}

		this.authService.loginWithPopup(currentProvider).then(currentUser => {
			const newUser: IUser = {
				account: {
					createdAt: currentUser.user.metadata.creationTime ?? '',
					lastLogin: currentUser.user.metadata.lastSignInTime ?? '',
				},
				profile: {
					firstname: '',
					lastname: '',
					username: currentUser.user.displayName ?? '',
					email: currentUser.user.email ?? '',
					phone: currentUser.user.phoneNumber ?? '',
					avatar: currentUser.user.photoURL ?? '',
				},
			};

			this.store.dispatch(
				UserActions.informations.addUser({
					payload: { userId: currentUser.user.uid, data: newUser },
				}),
			);

			this.router.navigateByUrl('/account/home');
		});
	}
}
