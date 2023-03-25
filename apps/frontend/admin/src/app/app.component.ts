import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'task-list-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	// triggers change detection for the component and its descendants
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'frontend-admin'
}
