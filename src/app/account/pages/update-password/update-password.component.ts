import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { updatePasswordValidationMessages } from '../../validations/messages.validation';
import { Observable, map } from 'rxjs';
import { inputEqualValidator } from '../../validators/input-equal.validator';

@Component({
	selector: 'app-update-password',
	templateUrl: './update-password.component.html',
	styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
	hidePassword!: boolean;

	mainForm!: FormGroup;
	passwordCtrl!: FormControl;
	confirmPasswordCtrl!: FormControl;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	inputsValidationMessages!: any;
	showPasswordEqualError$!: Observable<boolean>;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.hidePassword = false;
		this.inputsValidationMessages = updatePasswordValidationMessages;

		this.initFormControls();
		this.initMainForm();
		this.initObservables();
	}

	onMainFormSubmit(): void {
		this.updatePassword();
	}

	private updatePassword() {
		// eslint-disable-next-line no-console
		console.log(this.mainForm.value);

		// todo updade user passord
	}

	private initMainForm(): void {
		this.mainForm = this.formBuilder.group(
			{
				password: this.passwordCtrl,
				confirmPassword: this.confirmPasswordCtrl,
			},
			{
				updateOn: 'change',
				validators: [inputEqualValidator('password', 'confirmPassword')],
			},
		);
	}

	private initFormControls(): void {
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

	private initObservables(): void {
		this.showPasswordEqualError$ = this.mainForm.statusChanges.pipe(
			map(
				status =>
					status === 'INVALID' &&
					this.passwordCtrl.value &&
					this.confirmPasswordCtrl.value &&
					this.mainForm.hasError('confirmEqual'),
			),
		);
	}
}
