import { UsersRepository } from "../repositories/UsersRepositoryImplementation";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

export const createUserFactory = () => {
    const usersRepository = new UsersRepository();
    const createUser = new CreateUserService(usersRepository);
    const createUserController = new CreateUserController(createUser);
    return createUserController;
}