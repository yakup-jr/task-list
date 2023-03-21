export interface SignAuthPayload {
	username: string
	password: string
}

export interface SignAuthResponse {
	accessToken: string
	expiresIn: number
	id: number
}
