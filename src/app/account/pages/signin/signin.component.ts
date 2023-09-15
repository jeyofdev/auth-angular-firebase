import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { signinValidationMessages } from '../../validations/messages.validation';
import { FirebaseError } from '@angular/fire/app';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
	hidePassword!: boolean;

	mainForm!: FormGroup;
	emailCtrl!: FormControl<string | null>;
	passwordCtrl!: FormControl<string | null>;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	inputsValidationMessages!: any;
	formErrorMessage!: string | null;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.hidePassword = false;
		this.inputsValidationMessages = signinValidationMessages;

		this.initFormControls();
		this.initMainForm();
	}

	onMainFormSubmit(): void {
		this.signinWithEmail();
	}

	private signinWithEmail() {
		this.authService
			.login(this.mainForm.value.email, this.mainForm.value.password)
			.then(() => {
				this.formErrorMessage = null;
				this.mainForm.reset();
				this.router.navigateByUrl('/account/home');
			})
			.catch((error: unknown) => {
				if (error instanceof FirebaseError) {
					this.formErrorMessage = this.authService.setErrorMessage(error.code);
				}
			});
	}

	private initMainForm() {
		this.mainForm = this.formBuilder.group({
			email: this.emailCtrl,
			password: this.passwordCtrl,
		});
	}

	private initFormControls(): void {
		this.emailCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.pattern(this.inputsValidationMessages.email.pattern.regex),
		]);
		this.passwordCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.minLength(
				this.inputsValidationMessages.password.minlength.value,
			),
			Validators.maxLength(
				this.inputsValidationMessages.password.maxlength.value,
			),
		]);
	}
}
