import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { signinValidationMessages } from '../../validations/messages.validation';
import { AuthService } from '../../services/auth.service';

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

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
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
				this.mainForm.reset();
			})
			.catch((error: unknown) => {
				// eslint-disable-next-line no-console
				console.log(error);
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
