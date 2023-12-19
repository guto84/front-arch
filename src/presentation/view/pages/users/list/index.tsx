import { IFindAllUserUseCase } from "../../../../../modules/users/domain/usecases/find-all-users.usecase.interface"
import { Table } from "./components/table"
import { Details } from "./components/details"
import { IFindByIdUserUseCase } from "../../../../../modules/users/domain/usecases/find-by-id-users.usecase.interface"
import { useFindByIdUsers } from "./hooks/find-by-id-users.hook"
import { useFindAllUsers } from "./hooks/find-all-users.hook"

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
    handleDetails,
    details,
    isLoadingDetails,
  } = useFindByIdUsers(findById)

  return <>
    <Table
      data={listFindAll}
      isLoading={isLoadingFindAll}
      error={errorFindAll}
      handleDetails={handleDetails}
    />

    <Details
      isOpen={isOpenDetails}
      showDetail={showDetail}
      isLoading={isLoadingDetails}
      details={details}
    />
  </>
}
