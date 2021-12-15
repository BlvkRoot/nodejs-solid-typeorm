import { IUsersRepositories } from "../repositories/IUsersRepositories";

interface IUserRequest {
    name: string,
    username: string,
    email: string,
    password: string
}

class CreateUserService {
    constructor(private usersRepository: IUsersRepositories) {}

    async execute({ name, username, email, password }: IUserRequest) {
        const userAlreadyExists = await this.usersRepository.exists(username);

        if(userAlreadyExists) {
            throw new Error(`User ${username} already exists`);
        }

        const user = await this.usersRepository.createUser({ name, username, email, password});
        return user;
    }
}

export { CreateUserService }