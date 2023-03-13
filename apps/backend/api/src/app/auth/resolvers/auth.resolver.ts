import { Resolver, Query } from '@nestjs/graphql'
import {
	SighAuthPayload,
	SighAuthResponse,
} from '@task-list/shared/data-access/interfaces'
import { SignIn } from '../decorators/auth.decorator'
import { AuthService } from '../services/auth.service'

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query('login')
	async login(
		@SignIn() signInPayload: SighAuthPayload
	): Promise<SighAuthResponse> {
		return await this.authService.login(signInPayload)
	}

	@Query('logout')
	async logout(): Promise<boolean> {
		return true
	}
}
