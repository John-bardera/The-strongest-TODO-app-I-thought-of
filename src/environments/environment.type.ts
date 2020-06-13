export interface ApiHost {
  host: string;
  port: number;
  ssl: boolean;
}

export interface EnvironmentInterface {
  name: 'dev' | 'stg' | 'prod';
  production: boolean;
  api: ApiHost;
  firebaseConfig?: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    messagingSenderId: string;
  };
}
