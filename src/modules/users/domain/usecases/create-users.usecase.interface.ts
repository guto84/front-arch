import { User } from "../entities/user.entity";

export type CreateUserInput = {
  name: string
  email: string
}

export interface ICreateUsersUseCase {
  execute(input: CreateUserInput): Promise<User>
}
