import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FrontendExampleModule } from '@task-list/frontend-example'
import { FrontendExample2Module} from '@task-list/frontend-example2'

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, FrontendExampleModule, FrontendExample2Module],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
