import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	exports: [ButtonModule, DividerModule, InputTextModule],
})
export class PrimengModule {}
