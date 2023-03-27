import { ExecutionContext, createParamDecorator } from '@nestjs/common'

// return username and password from context
export const SignIn = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		// get all args from context
		const args = context.getArgs()[1]

		return { username: args.username, password: args.password }
	}
)
