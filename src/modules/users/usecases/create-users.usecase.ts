import { HttpClient } from "../../../infra/adapters/http-client.adapter"
import { User } from "../domain/entities/user.entity";
import { CreateUserInput, ICreateUsersUseCase } from "../domain/usecases/create-users.usecase.interface";

export class CreateUsersUseCase implements ICreateUsersUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(input: CreateUserInput): Promise<User> {
    const user = await this.httpClient.request({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: 'post',
      data: input,
    });

    return {
      id: user.data.id,
      name: user.data.name,
      email: user.data.email,
    }
  }
}
