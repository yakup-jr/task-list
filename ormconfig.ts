export default {
	production: false,
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: process.env.JWT_EXPIRES_IN,
	},
	connection: {
		type: process.env.DB_TYPE,
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USER_NAME,
		password: process.env.DB_USER_PASSWORD,
		database: process.env.DB_NAME,
		synchronize: true,
		logging: true,
		entities: ['dist/apps/backend/api/src/**/*.modelk{.ts, .js}'],
		migrations: ['dist/apps/backend/api/migrations/*{.ts, .js}'],
		cli: {
			migrationsDir: 'db/migrations',
		},
	},
}
