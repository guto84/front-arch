import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { IFindAllUserUseCase } from "../../../../../modules/users/domain/usecases/find-all-users.usecase.interface"
import { Table } from "./table"
import { Details } from "./details"
import { IFindByIdUserUseCase } from "../../../../../modules/users/domain/usecases/find-by-id-users.usecase.interface"

type Props = {
  findAll: IFindAllUserUseCase
  findById: IFindByIdUserUseCase
}

export const ListUsers = ({ findAll, findById }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const list = useQuery('usersData', () => findAll.execute())
  const details = useMutation((id: number) => findById.execute(id))

  const showDetail = (value: boolean) => {
    setIsOpen(value)
  }

  const handleDetails = (id: number) => {
    details.mutate(id)
    setIsOpen(true)
  }

  console.log(details)

  return <>
    <Table
      data={list.data}
      isLoading={list.isLoading}
      error={list.error}
      handleDetails={handleDetails}
    />

    <Details
      isOpen={isOpen}
      showDetail={showDetail}
      isLoading={details.isLoading}
      details={details.data}
    />
  </>
}
