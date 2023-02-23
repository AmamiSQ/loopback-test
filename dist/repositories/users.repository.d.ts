import { DefaultCrudRepository } from '@loopback/repository';
import { UsersDataSource } from '../datasources';
import { Users, UsersRelations } from '../models';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UsersRelations> {
    constructor(dataSource: UsersDataSource);
}
