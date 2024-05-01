import { httpClientAdapter } from "../../../../../infra/adapters/http-client.adapter"
import { FindByIdUsersUseCase } from "../../../../../modules/users/usecases/find-by-id-users.usecase"
import { useFindByIdUsers } from "./store/find-by-id-users.hook"
import { DetailsComponent } from "../list/components/details"
import { FindAllUsersUseCase } from "../../../../../modules/users/usecases/find-all-users.usecase"
import { useFindAllUsers } from "./store/find-all-users.hook"
import { TableComponent } from "../list/components/table"

export const ListUsers3 = () => {
  const findById = new FindByIdUsersUseCase(httpClientAdapter)
  const findAll = new FindAllUsersUseCase(httpClientAdapter)

  const {
    isOpenDetails,
    showDetail,
    details,
    isLoadingDetails,
    handleDetails
  } = useFindByIdUsers(findById)

  const {
    listFindAll,
    isLoadingFindAll,
    errorFindAll,
  } = useFindAllUsers(findAll)

  return <>
    <TableComponent
      data={listFindAll}
      isLoading={isLoadingFindAll}
      error={errorFindAll}
      handleDetails={handleDetails}
    />
    <DetailsComponent
      isOpen={isOpenDetails}
      showDetail={showDetail}
      isLoading={isLoadingDetails}
      details={details}
    />
  </>
}
