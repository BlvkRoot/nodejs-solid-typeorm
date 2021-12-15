import { Request, Response } from 'express'
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    constructor(private userService: CreateUserService) {}

    async handle(request: Request, response: Response){
        const { name, username, email, password } = request.body;
        const user = await this.userService.execute({name, username, email, password});

        return response.json(user);
    }
}

export { CreateUserController };