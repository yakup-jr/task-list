import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../../users/services/user.service'
import { PasswordService } from './password.service'
import { UserModel } from '../../users/models/user.model'
import { environment } from '../../../environment/environment'
import {
	SignAuthPayload,
	SignAuthResponse,
} from '@task-list/shared/data-access/interfaces'

@Injectable({})
export class AuthService {
	// get services for auth
	constructor(
		private readonly jwtService: JwtService,
		private readonly userService: UserService,
		private readonly passwordService: PasswordService
	) {}

	// checking validity of username and password
	async validateUser(
		username: string,
		password: string
	): Promise<Omit<UserModel, 'password'>> {
		const user = await this.userService.findByUsername(username)
		// password comparison
		const isValid = user
			? await this.passwordService.compare(password, user.password)
			: false
		if (isValid) {
			delete user.password

			return user
		}
		return null
	}

	async login(signInPayload: SignAuthPayload): Promise<SignAuthResponse> {
		// get valid user
		const user = await this.validateUser(
			signInPayload.username,
			signInPayload.password
		)
		// unauthorized user
		if (!user) throw new UnauthorizedException()
		const payload = { username: user.username, id: user.id }

		return {
			// send payload for create jwt token: headers.payload.secret
			accessToken: this.jwtService.sign(payload),
			// when expires
			expiresIn: new Date(environment.jwt.expiresIn).getDate(),
			// user id
			id: user.id,
		}
	}
}
