import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routes'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		// register router, enabledBlocking - blocks rendering of the application until the initial navigation is complete
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
		StoreModule.forRoot(
			{},
			{
				metaReducers: [],
				runtimeChecks: {
					strictActionImmutability: true,
					strictStateImmutability: true,
				},
			}
		),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
