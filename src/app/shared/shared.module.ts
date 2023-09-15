import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PrimengModule } from './primeng.module';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonSocialComponent } from './components/button/button-social/button-social.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './components/input/text-field/text-field.component';
import { ButtonRoundedComponent } from './components/button/button-rounded/button-rounded.component';
import { PasswordFieldComponent } from './components/input/password-field/password-field.component';
import { RouterModule } from '@angular/router';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
	declarations: [
		LayoutComponent,
		DividerComponent,
		ButtonSocialComponent,
		TextFieldComponent,
		ButtonRoundedComponent,
		PasswordFieldComponent,
		RedirectComponent,
	],
	imports: [CommonModule, PrimengModule, RouterModule, ReactiveFormsModule],
	exports: [
		PrimengModule,
		LayoutComponent,
		ReactiveFormsModule,
		TextFieldComponent,
		ButtonRoundedComponent,
		PasswordFieldComponent,
		RedirectComponent,
	],
})
export class SharedModule {}
