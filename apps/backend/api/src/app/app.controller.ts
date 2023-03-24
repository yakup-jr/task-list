import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
	// test get path
	@Get()
	getData() {
		return { message: 'Welcome to backend/api!' }
	}
}
