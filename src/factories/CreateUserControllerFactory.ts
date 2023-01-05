import { CreateUserController } from "../controller/CreateUserController";
import { InMemoryCreateUserRepository } from "../repositories/InMemoryCreateUserRepository";
import { SequelizeUserRepository } from "../repositories/SequelizeUserRepository";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserControllerFactory {
  static make() {
    // const repository = new InMemoryCreateUserRepository();
    const repository = new SequelizeUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}