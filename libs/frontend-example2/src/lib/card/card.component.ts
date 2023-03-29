import { Component, Input } from '@angular/core'

@Component({
	selector: 'task-list-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() title?: string;
	@Input() url?: string;
}
