import { User } from "../entities/user.entity";

export interface IFindAllUserUseCase {
  execute(): Promise<User[]>
}
