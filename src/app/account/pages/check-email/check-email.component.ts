import { Component } from '@angular/core';

@Component({
	selector: 'app-check-email',
	templateUrl: './check-email.component.html',
	styleUrls: ['./check-email.component.scss'],
})
export class CheckEmailComponent {
	resendEmail(): void {
		// eslint-disable-next-line no-console
		console.log('resend email');
	}
}
