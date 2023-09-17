import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { PasswordUpdateConfirmComponent } from './pages/password-update-confirm/password-update-confirm.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent,
		canActivate: [AuthGuard],
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
	{
		path: 'check-email',
		component: CheckEmailComponent,
	},
	{
		path: 'update-password',
		component: UpdatePasswordComponent,
	},
	{
		path: 'password-updated-confirm',
		component: PasswordUpdateConfirmComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
