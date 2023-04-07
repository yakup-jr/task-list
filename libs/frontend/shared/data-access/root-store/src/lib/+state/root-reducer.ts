import { ActionReducerMap } from '@ngrx/store'
import { RootState } from '../interfaces/root-state.interface'
import { routerReducer } from '@ngrx/router-store'

export const reducers: ActionReducerMap<RootState> = {
	/**
	 * router reducer
	 */
	router: routerReducer,
}
