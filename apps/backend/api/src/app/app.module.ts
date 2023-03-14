import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { AppController } from './app.controller'
import { environment } from '../environment/environment'
import { AuthModule } from './auth/auth.module'
import { resolverMap } from './app.resolver'
import { UserModel } from './users/models/user.model'
import { UserModule } from './users/users.module'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...environment.connection,
			entities: [UserModel],
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			typePaths: ['./**/*.graphql'],
			context: ({ req }) => ({ req }),
			playground: true,
			driver: ApolloDriver,
			resolvers: [resolverMap],
		}),
		UserModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
