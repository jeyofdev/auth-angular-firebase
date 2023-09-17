import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-check-email',
	templateUrl: './check-email.component.html',
	styleUrls: ['./check-email.component.scss'],
})
export class CheckEmailComponent {
	email!: string;

	constructor(
		private router: Router,
		private authService: AuthService,
	) {
		this.email = this.router.getCurrentNavigation()?.extras?.state?.['email'];
	}

	resendEmail(): void {
		this.authService.resetPassword(this.email);
	}
}
