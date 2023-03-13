import { Injectable } from '@nestjs/common'
import { hash, compare } from 'bcrypt'

@Injectable()
export class PasswordService {
	private saldRounds = 10

	public getHash(password: string): Promise<string> {
		return hash(password, this.saldRounds)
	}

	public compare(password: string, passwordHash: string): Promise<boolean> {
		return compare(password, passwordHash)
	}
}
