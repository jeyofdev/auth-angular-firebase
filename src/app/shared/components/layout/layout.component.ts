import { Component, Input, OnInit } from '@angular/core';
import { ProviderEnum } from '../../enum/provider.enum';
import { ISocialProvider } from 'src/app/core/model/social-provider.model';
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { AuthService } from '../../../account/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	@Input({ required: true }) pageTitle!: string;
	@Input() subtitle!: string;
	@Input({ required: true }) redirectLabel!: string;
	@Input({ required: true }) redirectRouterLink!: string;
	@Input({ required: true }) redirectLabelLink!: string;

	socialProviders!: ISocialProvider[];

	constructor(
		private authService: AuthService,
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

		this.authService.loginWithPopup(currentProvider).then(() => {
			this.router.navigateByUrl('/account/home');
		});
	}
}
