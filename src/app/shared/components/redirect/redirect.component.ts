import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-redirect',
	templateUrl: './redirect.component.html',
	styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent {
	@Input({ required: true }) label!: string;
	@Input() routerLink!: string;
	@Input() labelLink!: string;
	@Input() linkOnly!: boolean;
	@Input() isButton!: boolean;
	@Input() buttonLabel!: string;
	@Input() buttonClick!: void;
}
