import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppBrowserModule } from './app/app.browser.module'

function bootstrap() {
	platformBrowserDynamic()
		.bootstrapModule(AppBrowserModule)
		.catch(err => console.error(err))
}

if (document.readyState !== 'loading') {
	bootstrap()
} else {
	document.addEventListener('DOMContentLoaded', bootstrap)
}
