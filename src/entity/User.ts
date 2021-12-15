import {Entity, Column, PrimaryColumn} from "typeorm";
import { uuid } from "uuidv4";

@Entity('users')
export class User {

    @PrimaryColumn()
    readonly id?: string;

    @Column()
    name: string;

    @Column({
        unique: true,
    })
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
