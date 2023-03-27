import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { environment } from '../../environment/environment'
import { AuthService } from './services/auth.service'
import { PasswordService } from './services/password.service'
import { JwtStrategy } from './strategy/jwt.strategy'
import { AuthResolver } from './resolvers/auth.resolver'
import { UserModule } from '../users/users.module'

@Module({
	imports: [
		UserModule,
		// turn on and choose jwt token as default to auth
		PassportModule.register({
			defaultStrategy: 'jwt',
		}),
		// register JwtModule for create and check auth token
		JwtModule.register({
			// independent secret key for jwt token
			privateKey: environment.jwt.secret,
			// options for auth
			signOptions: {
				expiresIn: environment.jwt.expiresIn,
			},
		}),
	],
	providers: [AuthService, PasswordService, JwtStrategy, AuthResolver],
	exports: [AuthService, PassportModule],
})
export class AuthModule {}
