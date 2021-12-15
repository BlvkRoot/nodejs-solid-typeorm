import { User } from "../entity/User";

interface IUsersRepositories {
    createUser(user: User): Promise<User>;
    exists(username: string): Promise<boolean>;
}

export { IUsersRepositories }