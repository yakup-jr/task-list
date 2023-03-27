# Frontend client

This is a frontend client app built with Angular, Jest, TypeScript and Nx Monorepo'

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--DmojfdLx--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2995/95998d2a-00f2-4e8e-9ebc-0b06de97c37f.png)

## Getting Started

To get started with this app, follow these steps:

1. Clone the repo: `git clone https://github.com/yakup-jr/task-list.git`
2. Navigate to the app directory: `cd task-list/apps/frontend/client`
3. Install dependencies: `npm install`
4. Create a `.env` file based on the `.env.example` file, and fill in the necessary environment variables.

The app will start running on `http://localhost:4200/`. You can use an API client like Insomnia or GraphQL Playground to explore the API.

## Available Scripts

In the project directory, you can run:

### `npx nx serve frontend-client --configuration=development`

Serve the app in dev mode.

### `npx nx build frontend-client --configuration=production`

Serve the app in prod mode.

### `npx nx lint frontend-client`

Lints the app using ESLint.

### `npx nx test frontend-client`

Runs the app's tests.

### `npx nx compodoc frontend-client`

Runs the app's compodoc

### `npx nx extract-i18n frontend-client`

Runs extract-i18n the app's

### `npx nx build frontend-client --configuration=production`

Build the app's in prod mode

### `npx nx build frontend-client --configuration=development`

Runs the app's in dev mode

## License

This app is licensed under the MIT License.
