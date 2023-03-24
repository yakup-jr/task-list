import { ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

export class GraphQlAuthGuard extends AuthGuard('jwt') {
	// get request from context
	getRequest(context: ExecutionContext) {
		const ctx = GqlExecutionContext.create(context)

		return ctx.getContext().req
	}
}
