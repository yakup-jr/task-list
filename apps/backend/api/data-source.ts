import { DataSource } from 'typeorm'
import { environment } from './src/environment/environment'

export default new DataSource({
	type: environment.connection.type as 'postgres',
	host: environment.connection.host,
	port: Number(environment.connection.port),
	username: environment.connection.username,
	password: environment.connection.password,
	database: environment.connection.database,
	synchronize: environment.connection.synchronize,
	logging: environment.connection.logging,
	entities: environment.connection.entities,
	migrations: environment.connection.migrations,
})
