import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	mainForm!: FormGroup;
	personnalInfosForm!: FormGroup;

	firstnameCtrl!: FormControl<string | null>;
	lastnameCtrl!: FormControl<string | null>;
	usernameCtrl!: FormControl<string | null>;
	emailCtrl!: FormControl<string | null>;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
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
		});
	}

	private initFormGroups(): void {
		this.personnalInfosForm = this.formBuilder.group({
			firstname: this.firstnameCtrl,
			lastname: this.lastnameCtrl,
			username: this.usernameCtrl,
		});
	}

	private initFormControls(): void {
		this.firstnameCtrl = this.formBuilder.control('');
		this.lastnameCtrl = this.formBuilder.control('');
		this.usernameCtrl = this.formBuilder.control('');
	}
}
