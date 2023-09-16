import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent,
	},
	{
		path: 'home',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: 'signin',
		component: SigninComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'forgot-password',
		component: ForgotPasswordComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
