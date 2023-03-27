import type { User } from '@task-list/shared/data-access/interfaces'

import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity({
	name: 'users',
})
export class UserModel implements User {
	@PrimaryGeneratedColumn()
	id: number

	@CreateDateColumn()
	created: string

	@UpdateDateColumn()
	updated: string

	@Column({ unique: true })
	email: string

	@Column({ unique: true })
	phone?: string

	@Column()
	password: string

	@Column({ length: 50, unique: true })
	username: string

	@Column({ unique: true })
	nickname?: string
}
