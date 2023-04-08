import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		MatSlideToggleModule,
	],
})
export class AppModule {}
