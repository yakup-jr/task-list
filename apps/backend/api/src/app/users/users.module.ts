import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModel } from './models/user.model'
import { UserService } from './services/user.service'
import { UserResolver } from './resolvers/user.resolver'

@Module({
	// create a connection to the databasec for this model
	imports: [TypeOrmModule.forFeature([UserModel])],
	providers: [UserService, UserResolver],
	exports: [UserService],
})
export class UserModule {}
