import { User } from "../entities/user.entity";

export interface IFindByIdUserUseCase {
  execute(id: number): Promise<User>
}
