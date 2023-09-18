import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../account/services/auth.service';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
	connectedUser = this.authService.getAuthLocal();
	constructor(
		private router: Router,
		private authService: AuthService,
	) {}

	redirect(): void {
		this.router.navigateByUrl(
			this.connectedUser ? '/account' : '/account/signin',
		);
	}
}
