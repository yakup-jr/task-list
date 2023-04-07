import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { reducers } from './+state/root-reducer'
import { rootInitialState } from './+state/root-initial-state'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreRouterStateSerializerService } from './services/store-router-state-serializer.service'
import { RouterModule } from '@angular/router'

@NgModule({
	imports: [
		RouterModule,
		StoreModule.forRoot(reducers, {
			initialState: rootInitialState,
		}),
		StoreRouterConnectingModule.forRoot({
			serializer: StoreRouterStateSerializerService,
		}),
	],
})
export class RootStoreModule {}
