import { HttpClient } from "../../../infra/adapters/http-client.adapter"
import { User } from "../domain/entities/user.entity";
import { IFindAllUserUseCase } from "../domain/usecases/find-all-users.usecase.interface"

export class FindAllUsersUseCase implements IFindAllUserUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(): Promise<User[]> {
    const users = await this.httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    });
    return users.data.map((user: User) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }))
  }
}
