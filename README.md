# Thumbpoll Frontend with React & Redux

Check other documentations here:

- [Data Documentation](https://github.com/thumbpoll/frontend/blob/master/README.md)

## Tech Stack

- React: To component-based web application
  - React Router: To manage multiple pages/routes of the application
- Redux: To managing global state in store
  - Redux Devtools extension: To inspect all Redux behavior
  - Redux Thunk: To asynchronous operations in reducer
- Ant Design: To style the components without CSS file
- Axios: To request/fetch data to/from the backend API server

```txt
REACT_APP_API_URL=thumbpoll_api_key_from_heroku
```

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

## Building

```sh
yarn build
npm install -g serve
serve -s build
```

In deployment server such as Netlify, this build process should run automatically and the port is assigned by them (not `5000`).

## Deploying

You can use Netlify to deploy. After which, you have to configure the environment variables as well.

## Project Development Steps

```sh
mkdir projectname-frontend
cd projectname-frontend

npm install -g create-react-app
create-react-app .
```

## License

- MIT License
- Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
