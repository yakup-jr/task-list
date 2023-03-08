/**
 * interface User
 *
 * @description
 *
 * provides an entity user interface
 */
export interface User {
	/**
	 * user id
	 */
	id: number

	/**
	 * data created
	 */
	created: string
	/**
	 * data updated
	 */
	updated: string
	/**
	 * user email
	 */
	email: string
	/**
	 * user phone(optional)
	 */
	phone?: string
	/**
	 * user password
	 */
	password: string
	/**
	 * user name
	 * used a default username
	 */
	username: string
	/**
	 * user avatar
	 */
	nickname?: string
}
