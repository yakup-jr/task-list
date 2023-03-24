import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { environment } from '../../../environment/environment'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			// method to extract the jwt from the auth header of the incoming request.
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			// check when time exprires end
			ignoreExpiration: false,
			// secret independent key for jwt token
			secretOrKey: environment.jwt.secret,
		})
	}

	// return userId and username
	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username }
	}
}
