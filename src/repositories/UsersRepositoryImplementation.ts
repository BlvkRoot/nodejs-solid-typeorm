import { Repository } from "typeorm";
import { User } from "../entity/User";
import { IUsersRepositories } from "./IUsersRepositories";

class UsersRepository extends Repository<User> implements IUsersRepositories {

    async createUser({ name, username, email, password }: User): Promise<User> {
        const user = this.create({ name, username, email, password });
        return await this.save(user);
    }

    async exists(username: string): Promise<boolean> {
        const userExists = this.findOne({ username });
        return !!userExists;
    }

}

export { UsersRepository }