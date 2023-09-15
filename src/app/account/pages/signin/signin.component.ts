import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.hidePassword = false;

		this.initFormControls();
		this.initMainForm();
	}

	onMainFormSubmit(): void {
		// todo login user with form datas
		// eslint-disable-next-line no-console
		console.log(this.mainForm.value);
	}

	private initMainForm() {
		this.mainForm = this.formBuilder.group({
			email: this.emailCtrl,
			password: this.passwordCtrl,
		});
	}

	private initFormControls(): void {
		this.emailCtrl = this.formBuilder.control('');
		this.passwordCtrl = this.formBuilder.control('');
	}
}
