import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '../environment/environmet'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppComponent } from './app.component'
import { RootStoreModule } from '@task-list/frontend/shared/data-access/root-store'
import { RouterModule } from '@angular/router'
import { AppModule } from './app.module'

@NgModule({
	imports: [
		AppModule,
		!environment.production
			? StoreDevtoolsModule.instrument({ logOnly: environment.production })
			: [],
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		MatSlideToggleModule,
		RootStoreModule,
		RouterModule.forRoot([], { initialNavigation: 'enabledNonBlocking' }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppBrowserModule {}
