import { RootState } from '../interfaces/root-state.interface'

export const rootInitialState: RootState = {
	router: {
		state: {
			url: '',
			queryParams: {},
			params: {},
		},
		navigationId: 0,
	},
}
