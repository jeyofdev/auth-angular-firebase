import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { PasswordUpdateConfirmComponent } from './pages/password-update-confirm/password-update-confirm.component';
import { IsAuthGuard } from './guards/isAuth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent,
		canActivate: [IsAuthGuard],
	},
	{
		path: 'home',
		redirectTo: '',
		pathMatch: 'full',
		canActivate: [IsAuthGuard],
	},
	{
		path: 'signin',
		component: SigninComponent,
		canActivate: [NotAuthGuard],
	},
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [NotAuthGuard],
	},
	{
		path: 'forgot-password',
		component: ForgotPasswordComponent,
		canActivate: [NotAuthGuard],
	},
	{
		path: 'check-email',
		component: CheckEmailComponent,
		canActivate: [NotAuthGuard],
	},
	{
		path: 'update-password',
		component: UpdatePasswordComponent,
		canActivate: [NotAuthGuard],
	},
	{
		path: 'password-updated-confirm',
		component: PasswordUpdateConfirmComponent,
		canActivate: [NotAuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
