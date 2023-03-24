export const environment = {
	// goal build
	production: false,
	jwt: {
		// secret key for authentication
		secret: process.env.JWT_SECRET,
		// when expires
		expiresIn: process.env.JWT_EXPIRES_IN,
	},
	connection: {
		// type server db
		type: process.env.DB_TYPE as 'postgres',
		// url db server host
		host: process.env.DB_HOST,
		// postgres server port
		port: Number(process.env.DB_PORT),
		// username for login in db
		username: process.env.DB_USER_NAME,
		// password for login in db
		password: process.env.DB_USER_PASSWORD,
		// name of db
		database: process.env.DB_NAME,
		// synchronization every time when the database server is starting
		synchronize: true,
		// logging in console
		logging: true,
		// where to find files entities when the script db:migration:models is run
		entities: ['dist/apps/backend/api/src/**/*.model.js'],
		// where to find files migrations when the script db:migration:run is run
		migrations: ['dist/apps/backend/api/src/migrations/*.js'],
	},
}
