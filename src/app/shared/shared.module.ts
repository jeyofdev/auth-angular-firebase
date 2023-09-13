import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PrimengModule } from './primeng.module';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonSocialComponent } from './components/button/button-social/button-social.component';

@NgModule({
	declarations: [LayoutComponent, DividerComponent, ButtonSocialComponent],
	imports: [CommonModule, PrimengModule],
	exports: [PrimengModule, LayoutComponent],
})
export class SharedModule {}
