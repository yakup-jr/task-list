import { Resolver, Query } from '@nestjs/graphql'
import type {
	SignAuthPayload,
	SignAuthResponse,
} from '@task-list/shared/data-access/interfaces'
import { SignIn } from '../decorators/auth.decorator'
import { AuthService } from '../services/auth.service'

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query('login')
	async login(
		@SignIn() signInPayload: SignAuthPayload
	): Promise<SignAuthResponse> {
		return await this.authService.login(signInPayload)
	}

	@Query('logout')
	async logout(): Promise<boolean> {
		return true
	}
}
