import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-button-social',
	templateUrl: './button-social.component.html',
	styleUrls: ['./button-social.component.scss'],
})
export class ButtonSocialComponent implements OnInit {
	@Input() icon!: string;
	@Input({ required: true }) type!: 'submit' | 'reset' | 'button';
	@Input() outline!: boolean;
	@Input() size!: 'small' | 'medium' | 'normal' | 'large';

	styleClass!: string;

	ngOnInit(): void {
		this.setStyleClass();
	}

	setStyleClass() {
		this.styleClass = 'p-button-rounded ';

		if (this.outline) {
			this.styleClass += `p-button-outlined `;
		}

		if (this.size) {
			this.styleClass += ` size-${this.size}`;
		}
	}
}
