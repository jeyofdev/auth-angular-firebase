import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	user!: any;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		if (localStorage.getItem('user')) {
			this.user = JSON.parse(localStorage.getItem('user') as string);
		}
	}
}
