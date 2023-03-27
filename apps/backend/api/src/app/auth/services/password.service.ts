import { Injectable } from '@nestjs/common'
import { hash, compare } from 'bcrypt'

@Injectable()
export class PasswordService {
	// cost factor for calculate a single BCrypt hash
	private saldRounds = 10

	// return hash basic on a password
	public getHash(password: string): Promise<string> {
		return hash(password, this.saldRounds)
	}

	// return boolean witch comparision hash password and password
	public compare(password: string, passwordHash: string): Promise<boolean> {
		return compare(password, passwordHash)
	}
}
