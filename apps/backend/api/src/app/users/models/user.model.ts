import { User } from '@task-list/shared/data-access/interfaces'

import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity({
	name: 'user',
})
export class UserModel implements User {
	@PrimaryColumn()
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

	@Column({ unique: true })
	username: string

	@Column({ unique: true })
	nickname?: string
}
