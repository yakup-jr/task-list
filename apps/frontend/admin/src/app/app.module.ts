import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routes'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		// register router, enabledBlocking - blocks rendering of the application until the initial navigation is complete
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
