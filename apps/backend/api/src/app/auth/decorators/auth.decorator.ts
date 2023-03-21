import { ExecutionContext, createParamDecorator } from '@nestjs/common'

export const SignIn = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		const args = context.getArgs()[1]

		return { username: args.username, password: args.password }
	}
)
