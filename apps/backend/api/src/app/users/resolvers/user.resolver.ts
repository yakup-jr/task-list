import { Resolver } from '@nestjs/graphql'
import { UserService } from '../services/user.service'
import { UserModel } from '../models/user.model'
import { CurrentUser } from '../decorators/user.decorator'

@Resolver('User')
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	async whoAmI(@CurrentUser() user: UserModel): Promise<UserModel> {
		return this.userService.findById(user.id)
	}
}
