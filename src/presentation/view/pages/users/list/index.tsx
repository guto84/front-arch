import { TableComponent } from "./components/table"
import { DetailsComponent } from "./components/details"
import { useFindAllUsers } from "./store/find-all-users.hook"
import { useFindByIdUsers } from "./store/find-by-id-users.hook"
import { IFindAllUserUseCase } from "../../../../../modules/users/domain/usecases/find-all-users.usecase.interface"
import { IFindByIdUserUseCase } from "../../../../../modules/users/domain/usecases/find-by-id-users.usecase.interface"

type Props = {
  findAll: IFindAllUserUseCase
  findById: IFindByIdUserUseCase
}

export const ListUsers = ({ findAll, findById }: Props) => {
  const {
    listFindAll,
    isLoadingFindAll,
    errorFindAll,
  } = useFindAllUsers(findAll)

  const {
    isOpenDetails,
    showDetail,
    details,
    handleDetails,
    isLoadingDetails,
  } = useFindByIdUsers(findById)

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
