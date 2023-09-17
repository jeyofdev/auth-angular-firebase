import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{
		path: 'account',
		loadChildren: () =>
			import('./account/account.module').then(m => m.AccountModule),
	},
	{
		path: '404',
		component: NotFoundComponent,
	},
	{
		path: '**',
		redirectTo: '404',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
