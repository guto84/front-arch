import { httpClientAdapter } from "../../../../infra/adapters/http-client.adapter";
import { FindAllUsersUseCase } from "../../../../modules/users/usecases/find-all-users.usecase";
import { FindByIdUsersUseCase } from "../../../../modules/users/usecases/find-by-id-users.usecase";
import { ListUsers } from "../../../view/pages/users/list";

const findAllUsersUseCase = new FindAllUsersUseCase(httpClientAdapter)
const findByIdUsersUseCase = new FindByIdUsersUseCase(httpClientAdapter)

export const MakeListUsers = () =>
  <ListUsers
    findAll={findAllUsersUseCase}
    findById={findByIdUsersUseCase}
  />
