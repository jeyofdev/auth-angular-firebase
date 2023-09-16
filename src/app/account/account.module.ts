import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './pages/account/account.component';
import { UserInformationsEffects } from './state/user/effects/user-informations.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './state/user/reducers/user.reducer';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
	declarations: [
		SigninComponent,
		RegisterComponent,
		AccountComponent,
		ForgotPasswordComponent,
	],
	imports: [
		CommonModule,
		AccountRoutingModule,
		SharedModule,
		StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducers, {
			metaReducers: fromUser.metaReducers,
		}),
		EffectsModule.forFeature([UserInformationsEffects]),
	],
})
export class AccountModule {}
