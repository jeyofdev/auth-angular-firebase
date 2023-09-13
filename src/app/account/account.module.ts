import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
	declarations: [SigninComponent, RegisterComponent],
	imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
