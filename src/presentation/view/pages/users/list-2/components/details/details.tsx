/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useFindByIdUsers } from "../../store/find-by-id-users.hook"
import { useUserStore } from "../../store/user.store"
import { DetailsComponent } from "./details.component"
import { FindByIdUsersUseCase } from "../../../../../../../modules/users/usecases/find-by-id-users.usecase"
import { httpClientAdapter } from "../../../../../../../infra/adapters/http-client.adapter"

export const Details = () => {
  const findById = new FindByIdUsersUseCase(httpClientAdapter)
  const userId = useUserStore(state => state.id)

  const {
    isOpenDetails,
    showDetail,
    details,
    isLoadingDetails,
    handleDetails
  } = useFindByIdUsers(findById)

  useEffect(() => {
    handleDetails(userId)
  }, [userId])

  return <>
    <DetailsComponent
      isOpen={isOpenDetails}
      showDetail={showDetail}
      isLoading={isLoadingDetails}
      details={details}
    />
  </>
}
