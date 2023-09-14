import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
	exports: [ButtonModule, DividerModule, InputTextModule, PasswordModule],
})
export class PrimengModule {}
