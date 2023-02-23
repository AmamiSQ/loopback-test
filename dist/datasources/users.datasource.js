"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config_json_1 = require("./config.json");
const config = {
    name: 'users',
    connector: 'postgresql',
    url: config_json_1.urlDB,
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: config_json_1.passwordDB,
    database: 'loopbackDB'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let UsersDataSource = class UsersDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
UsersDataSource.dataSourceName = 'users';
UsersDataSource.defaultConfig = config;
UsersDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.users', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], UsersDataSource);
exports.UsersDataSource = UsersDataSource;
//# sourceMappingURL=users.datasource.js.map