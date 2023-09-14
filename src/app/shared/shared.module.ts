import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PrimengModule } from './primeng.module';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonSocialComponent } from './components/button/button-social/button-social.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './components/input/text-field/text-field.component';

@NgModule({
	declarations: [
		LayoutComponent,
		DividerComponent,
		ButtonSocialComponent,
		TextFieldComponent,
	],
	imports: [CommonModule, PrimengModule, ReactiveFormsModule],
	exports: [
		PrimengModule,
		LayoutComponent,
		ReactiveFormsModule,
		TextFieldComponent,
	],
})
export class SharedModule {}
