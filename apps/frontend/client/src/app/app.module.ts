import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppComponent } from './app.component'
import { RootStoreModule } from '@task-list/frontend/shared/data-access/root-store'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		// import module from material-ui
		MatSlideToggleModule,
		RootStoreModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
