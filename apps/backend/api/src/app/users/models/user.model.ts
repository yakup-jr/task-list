import type { User } from '@task-list/shared/data-access/interfaces'

import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

// marks a class as a database entity
@Entity({
	name: 'users',
})
export class UserModel implements User {
	// primary key of the database table
  @PrimaryGeneratedColumn()
	id: number

	// mark date when property create
	@CreateDateColumn()
	created: string

	// mark date when property update
	@UpdateDateColumn()
	updated: string

	// db column email
	@Column({ unique: true })
	email: string

	// db column phone optional
	@Column({ unique: true })
	phone?: string

	// db column password
	@Column()
	password: string

	// db column username
  @Column({ length: 50, unique: true })
	username: string

	// db column nickname optional
	@Column({ unique: true })
	nickname?: string
}
