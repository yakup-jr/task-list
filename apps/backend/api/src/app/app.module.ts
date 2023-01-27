import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { GraphQLModule } from '@nestjs/graphql'
import { AppResolver } from './app.resolver'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TypeOrmModule } from '@nestjs/typeorm'
import { environment } from '../environment/environment'

@Module({
	imports: [
    TypeOrmModule.forRoot({
			...environment.connection
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			typePaths: ['./**/*.graphql'],
			context: ({ req }) => ({ req }),
			playground: true,
			driver: ApolloDriver
		})
	],
	controllers: [AppController],
	providers: [AppResolver]
})
export class AppModule {}
