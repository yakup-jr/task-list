export interface SighAuthPayload {
	username: string
	password: string
}

export interface SighAuthResponse {
	accessToken: string
	expiresIn: number
	id: number
}
