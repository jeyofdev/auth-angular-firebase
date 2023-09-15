import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@NgModule({
	exports: [
		ButtonModule,
		DividerModule,
		InputTextModule,
		PasswordModule,
		MessageModule,
		MessagesModule,
	],
})
export class PrimengModule {}
