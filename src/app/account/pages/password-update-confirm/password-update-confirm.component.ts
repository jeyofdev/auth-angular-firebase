import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-password-update-confirm',
	templateUrl: './password-update-confirm.component.html',
	styleUrls: ['./password-update-confirm.component.scss'],
})
export class PasswordUpdateConfirmComponent {
	constructor(private router: Router) {}

	redirectToSignIn(): void {
		this.router.navigateByUrl('/account/signin');
	}
}
