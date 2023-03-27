import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserModel } from '../models/user.model'

@Injectable()
export class UserService {
	// get the repository of user
	constructor(
		@InjectRepository(UserModel)
		private readonly userRepository: Repository<UserModel>
	) {}

	// return all users
	async findAll(): Promise<UserModel[]> {
		return await this.userRepository.find()
	}

	// return user by id
	async findById(id: number): Promise<UserModel> {
		return (await this.userRepository.findOneBy({ id })) || null
	}

	// return user by username
	async findByUsername(username: string): Promise<UserModel> {
		return await this.userRepository.findOneBy({ username })
	}

	// return new user by param user
	async createUser(user: Partial<UserModel>): Promise<UserModel> {
		const newUser = await this.userRepository.create(user)

		return await this.userRepository.save(newUser)
	}
}
