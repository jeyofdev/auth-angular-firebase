import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { forgotPasswordValidationMessages } from '../../validations/messages.validation';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
	hidePassword!: boolean;

	mainForm!: FormGroup;
	emailCtrl!: FormControl<string | null>;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	inputsValidationMessages!: any;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.inputsValidationMessages = forgotPasswordValidationMessages;

		this.initFormControls();
		this.initMainForm();
	}

	onMainFormSubmit(): void {
		this.resetPassword();
	}

	private resetPassword() {
		this.authService.resetPassword(this.mainForm.value.email).then(() => {
			const routeState = {
				email: this.mainForm.value.email,
			};

			this.mainForm.reset();
			this.router.navigateByUrl('/account/check-email', {
				state: routeState,
			});
		});
	}

	private initMainForm() {
		this.mainForm = this.formBuilder.group({
			email: this.emailCtrl,
		});
	}

	private initFormControls(): void {
		this.emailCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.pattern(this.inputsValidationMessages.email.pattern.regex),
		]);
	}
}
