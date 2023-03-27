# Backend API

This is a backend API app built with NestJS, GraphQL, Postgres, TypeScript and Nx Monorepo'

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--DmojfdLx--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2995/95998d2a-00f2-4e8e-9ebc-0b06de97c37f.png)

## Getting Started

To get started with this app, follow these steps:

1. Clone the repo: `git clone https://github.com/yakup-jr/task-list.git`
2. Navigate to the app directory: `cd task-list/apps/backend-api`
3. Install dependencies: `npm install`
4. Create a `.env` file based on the `.env.example` file, and fill in the necessary environment variables.
5. Start the app: `npm start`

The app will start running on `http://localhost:3000/graphql`. You can use an API client like Insomnia or GraphQL Playground to explore the API.

## Available Scripts

In the project directory, you can run:

### `npx nx serve backend-api`

Runs the app in production mode.

### `npx nx build backend-api`

Builds the app for production.

### `npx nx lint backend-api`

Lints the app using ESLint.

### `npx nx test backend-api`

Runs the app's tests.

### `npx nx compodoc backend-api`

Runs the app's compodoc

### `npx nx db:start backend-api`

Up the app's docker-compose

### `npx nx db:stop backend-api`

Down the app's docker-compose

### `npx nx db:stop backend-api`

Runs the app's docker-compose down

### `npx nx db:migration:create backend-api`

Create the app's migration for db

### `npx nx db:migration:run backend-api`

Runs the app's migration for db

### `npx nx db:migration:revert backend-api`

Revert the app's migration for db

### `npx nx db:migrations:models backend-api`

Compile the app's models for migration

## License

This app is licensed under the MIT License.
