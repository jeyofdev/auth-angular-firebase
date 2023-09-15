import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-redirect',
	templateUrl: './redirect.component.html',
	styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent {
	@Input({ required: true }) label!: string;
	@Input({ required: true }) routerLink!: string;
	@Input({ required: true }) labelLink!: string;
}
