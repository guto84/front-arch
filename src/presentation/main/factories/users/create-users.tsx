import { httpClientAdapter } from "../../../../infra/adapters/http-client.adapter"
import { CreateUsersUseCase } from "../../../../modules/users/usecases/create-users.usecase"
import { CreateUsers } from "../../../view/pages/users/create"

const createUsersUseCase = new CreateUsersUseCase(httpClientAdapter)

export const MakeCreateUsers = () => <CreateUsers create={createUsersUseCase} />
