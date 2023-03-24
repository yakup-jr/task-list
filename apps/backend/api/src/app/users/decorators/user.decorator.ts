import { ExecutionContext, createParamDecorator } from '@nestjs/common'

// return all context. Should be user
export const CurrentUser = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		return context
	}
)
