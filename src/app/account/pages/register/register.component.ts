import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { registerValidationMessages } from '../../validations/messages.validation';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	hidePassword!: boolean;

	mainForm!: FormGroup;
	personnalInfosForm!: FormGroup;
	passwordForm!: FormGroup;

	firstnameCtrl!: FormControl<string | null>;
	lastnameCtrl!: FormControl<string | null>;
	usernameCtrl!: FormControl<string | null>;
	emailCtrl!: FormControl<string | null>;
	passwordCtrl!: FormControl<string | null>;
	confirmPasswordCtrl!: FormControl<string | null>;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	inputsValidationMessages!: any;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.hidePassword = false;
		this.inputsValidationMessages = registerValidationMessages;

		this.initFormControls();
		this.initFormGroups();
		this.initMainForm();
	}

	onMainFormSubmit(): void {
		// todo register user with form datas
		// eslint-disable-next-line no-console
		console.log(this.mainForm.value);
	}

	private initMainForm(): void {
		this.mainForm = this.formBuilder.group({
			personnalInfos: this.personnalInfosForm,
			password: this.passwordForm,
		});
	}

	private initFormGroups(): void {
		this.personnalInfosForm = this.formBuilder.group({
			firstname: this.firstnameCtrl,
			lastname: this.lastnameCtrl,
			username: this.usernameCtrl,
			email: this.emailCtrl,
		});

		this.passwordForm = this.formBuilder.group({
			password: this.passwordCtrl,
			confirmPassword: this.confirmPasswordCtrl,
		});
	}

	private initFormControls(): void {
		this.firstnameCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.minLength(
				registerValidationMessages.firstname.minlength.value,
			),
			Validators.maxLength(
				registerValidationMessages.firstname.maxlength.value,
			),
		]);

		this.lastnameCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.minLength(
				this.inputsValidationMessages.lastname.minlength.value,
			),
			Validators.maxLength(
				this.inputsValidationMessages.lastname.maxlength.value,
			),
		]);

		this.usernameCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.minLength(
				this.inputsValidationMessages.username.minlength.value,
			),
			Validators.maxLength(
				this.inputsValidationMessages.username.maxlength.value,
			),
		]);

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

		this.confirmPasswordCtrl = this.formBuilder.control('', [
			Validators.required,
			Validators.minLength(
				this.inputsValidationMessages.confirmPassword.minlength.value,
			),
			Validators.maxLength(
				this.inputsValidationMessages.confirmPassword.maxlength.value,
			),
		]);
	}
}
