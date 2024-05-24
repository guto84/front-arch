import { useState } from "react"
import { IFindByIdUserUseCase } from "../../../../../../modules/users/domain/usecases/find-by-id-users.usecase.interface"
import { useMutation } from "@tanstack/react-query"

export const useFindByIdUsers = (findById: IFindByIdUserUseCase) => {
  const [isOpen, setIsOpen] = useState(false)

  const details = useMutation({
    mutationFn: (id: number) => findById.execute(id)
  })

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
    isLoadingDetails: details.isPending,
    details: details.data,
    handleDetails
  }
}
