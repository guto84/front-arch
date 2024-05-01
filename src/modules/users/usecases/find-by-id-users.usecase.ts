import { HttpClient } from "../../../infra/adapters/http-client.adapter"
import { User } from "../domain/entities/user.entity";
import { IFindByIdUserUseCase } from "../domain/usecases/find-by-id-users.usecase.interface";

export class FindByIdUsersUseCase implements IFindByIdUserUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(id: number | null): Promise<User> {
    const user = await this.httpClient.request({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: 'get',
    });

    return {
      id: user.data.id,
      name: user.data.name,
      email: user.data.email,
    }
  }
}
