import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PrimengModule } from './primeng.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, PrimengModule],
	exports: [PrimengModule, LayoutComponent],
})
export class SharedModule {}
