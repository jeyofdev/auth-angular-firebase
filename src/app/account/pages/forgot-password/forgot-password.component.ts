import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { forgotPasswordValidationMessages } from '../../validations/messages.validation';

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

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.inputsValidationMessages = forgotPasswordValidationMessages;

		this.initFormControls();
		this.initMainForm();
	}

	onMainFormSubmit(): void {
		// eslint-disable-next-line no-console
		console.log(this.mainForm.value);
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
