import { Injectable } from '@nestjs/common'

@Injectable({})
export class AuthService {
	login(signInPayload: SighAuthPayload): Promise<SighAuthResponse> {
		return {
			accessToken, // JWT
			expiresIn, // JWT
			id, // user.service.ts
		}
	}
}
