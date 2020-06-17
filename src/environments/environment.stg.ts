import { EnvironmentInterface } from './environment.type';

export const environment: EnvironmentInterface = {
  name: 'stg',
  production: true,
  api: {
    host: 'hoge',
    port: 8000,
    ssl: true,
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAd-y2qoQ3Zbh_NWSXyCKTJ5kKqh3P2jxc',
    authDomain: 'https://strongest-todo.firebaseapp.com',
    databaseURL: 'https://strongest-todo.firebaseio.com',
    projectId: 'strongest-todo',
    messagingSenderId: '412630926031',
  },
};
