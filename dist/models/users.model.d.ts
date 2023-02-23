import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: number;
    firstName: string;
    lastName: string;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export type UsersWithRelations = Users & UsersRelations;
