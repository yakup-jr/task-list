import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserModel } from '../models/user.model'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserModel)
		private readonly userRepository: Repository<UserModel>
	) {}

	async findAll(): Promise<UserModel[]> {
		return await this.userRepository.find()
	}

	async findById(id: number): Promise<UserModel> {
		return (await this.userRepository.findOneBy({ id })) || null
	}

	async findByUsername(username: string): Promise<UserModel> {
		return await this.userRepository.findOneBy({ username })
	}

	async createUser(user: Partial<UserModel>): Promise<UserModel> {
		const newUser = await this.userRepository.create(user)

		return await this.userRepository.save(newUser)
	}
}
