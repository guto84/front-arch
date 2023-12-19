import { useMutation } from "react-query"
import { IFindByIdUserUseCase } from "../../../../../../modules/users/domain/usecases/find-by-id-users.usecase.interface"
import { useState } from "react"

export const useFindByIdUsers = (findById: IFindByIdUserUseCase) => {
  const [isOpen, setIsOpen] = useState(false)

  const details = useMutation((id: number) => findById.execute(id))

  const showDetail = (value: boolean) => {
    setIsOpen(value)
  }

  const handleDetails = (id: number) => {
    details.mutate(id)
    setIsOpen(true)
  }

  return {
    isOpenDetails: isOpen,
    showDetail,
    isLoadingDetails: details.isLoading,
    details: details.data,
    handleDetails
  }
}
