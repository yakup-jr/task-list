import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppComponent } from './app.component'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		// import module from material-ui
		MatSlideToggleModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
