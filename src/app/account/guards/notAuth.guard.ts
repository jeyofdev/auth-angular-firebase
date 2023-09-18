import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class NotAuthGuard {
	constructor(
		private router: Router,
		private authService: AuthService,
	) {}

	canActivate(): boolean {
		if (!this.authService.getAuthLocal()) {
			return true;
		}

		this.router.navigateByUrl('/account');
		return false;
	}
}
