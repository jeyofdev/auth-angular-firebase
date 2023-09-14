import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.hidePassword = false;

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
		this.firstnameCtrl = this.formBuilder.control('');
		this.lastnameCtrl = this.formBuilder.control('');
		this.usernameCtrl = this.formBuilder.control('');
		this.emailCtrl = this.formBuilder.control('');
		this.passwordCtrl = this.formBuilder.control('');
		this.confirmPasswordCtrl = this.formBuilder.control('');
	}
}
