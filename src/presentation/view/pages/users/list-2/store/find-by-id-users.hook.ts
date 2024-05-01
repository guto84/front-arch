import { useState } from "react"
import { useMutation } from "react-query"
import { IFindByIdUserUseCase } from "../../../../../../modules/users/domain/usecases/find-by-id-users.usecase.interface"

export const useFindByIdUsers = (findById: IFindByIdUserUseCase) => {
  const [isOpen, setIsOpen] = useState(false)

  const details = useMutation((id: number | null) => findById.execute(id))

  const showDetail = (value: boolean) => {
    setIsOpen(value)
  }

  const handleDetails = (id: number | null) => {
    if(id !== null) {
      details.mutate(id)
      setIsOpen(true)
    }
  }

  return {
    isOpenDetails: isOpen,
    showDetail,
    isLoadingDetails: details.isLoading,
    details: details.data,
    handleDetails
  }
}
