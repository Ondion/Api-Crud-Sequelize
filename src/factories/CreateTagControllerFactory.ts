import { CreateTagController } from "../controller/CreateTagController";
import { SequelizeTagRepository } from "../repositories/SequelizeTagRepository";
import { CreateTagService } from "../services/CreateTagService";

export class CreateTagControllerFactory {
  static make() {
    const repository = new SequelizeTagRepository();
    const service = new CreateTagService(repository);
    const controller = new CreateTagController(service);

    return controller;
  }
}