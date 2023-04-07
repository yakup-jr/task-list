import { RouterReducerState } from '@ngrx/router-store'
import { RouterUrlState } from './router-url-state.interface'

export interface RootState {
	router: RouterReducerState<RouterUrlState>
}
