import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from '../services/user.service'
import type { UserModel } from '../models/user.model'
import { CurrentUser } from '../decorators/user.decorator'
import { UseGuards } from '@nestjs/common'
import { GraphQlAuthGuard } from '../guards/graphql.auth-guard'

@Resolver('User')
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query('user')
	@UseGuards(GraphQlAuthGuard)
	async whoAmI(@CurrentUser() user: UserModel): Promise<UserModel> {
		return await this.userService.findById(user.id)
	}
}
