import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {urlDB, passwordDB} from './config.json';

const config = {
  name: 'users',
  connector: 'postgresql',
  url: urlDB,
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: passwordDB,
  database: 'loopbackDB'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UsersDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'users';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.users', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
