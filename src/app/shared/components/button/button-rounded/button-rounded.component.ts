import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-button-rounded',
	templateUrl: './button-rounded.component.html',
	styleUrls: ['./button-rounded.component.scss'],
})
export class ButtonRoundedComponent implements OnInit {
	@Input() icon!: string;
	@Input({ required: true }) type!: 'submit' | 'reset' | 'button';
	@Input() outline!: boolean;
	@Input() size!: 'small' | 'medium' | 'normal' | 'large';
	@Input() disabled!: boolean;
	@Input() severity!:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info'
		| 'help';

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

		if (this.severity) {
			this.styleClass += ` p-button-${this.severity}`;
		}
	}
}
