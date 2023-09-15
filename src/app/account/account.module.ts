import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
	declarations: [SigninComponent, RegisterComponent, AccountComponent],
	imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
