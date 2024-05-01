import { User } from "../entities/user.entity";

export interface IFindByIdUserUseCase {
  execute(id: number | null): Promise<User>
}
