import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
	exports: [ButtonModule, DividerModule],
})
export class PrimengModule {}
