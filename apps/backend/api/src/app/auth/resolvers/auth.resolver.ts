import { Resolver, Query } from '@nestjs/graphql'
import type {
	SignAuthPayload,
	SignAuthResponse,
} from '@task-list/shared/data-access/interfaces'
import { SignIn } from '../decorators/auth.decorator'
import { AuthService } from '../services/auth.service'

@Resolver('Auth')
export class AuthResolver {
	// get service
	constructor(private readonly authService: AuthService) {}

	// resolve login
	@Query('login')
	async login(
		// get required params from request
		@SignIn() signInPayload: SignAuthPayload
	): Promise<SignAuthResponse> {
		// try to find and return user
		return await this.authService.login(signInPayload)
	}

	// resolve loguot
	@Query('logout')
	async logout(): Promise<boolean> {
		return true
	}
}
