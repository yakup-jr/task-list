import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppComponent } from './app.component'
import { RootStoreModule } from '@task-list/frontend/shared/data-access/root-store'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		MatSlideToggleModule,
		RootStoreModule,
		RouterModule.forRoot([], { initialNavigation: 'enabledNonBlocking' }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
