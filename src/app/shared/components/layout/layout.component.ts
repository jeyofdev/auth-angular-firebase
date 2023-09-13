import { Component, Input, OnInit } from '@angular/core';
import { ProviderEnum } from '../../enum/provider.enum';
import { ISocialProvider } from 'src/app/core/model/social-provider.model';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	@Input({ required: true }) pageTitle!: string;
	@Input() subtitle!: string;

	socialProviders!: ISocialProvider[];

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
		// eslint-disable-next-line no-console
		console.log(provider);

		// todo login with social provider
	}
}
