import React from 'react';
import { User } from '../../../../../../../modules/users/domain/entities/user.entity';

type DetailsProps = {
  isOpen: boolean
  showDetail: (value: boolean) => void
  details: User | undefined
  isLoading: boolean
}

export const DetailsComponent: React.FC<DetailsProps> = ({ isOpen, showDetail, details, isLoading }) => {
  if (isLoading) return 'Loading...'
  
  if (!isOpen) return null

  return (
    <div>
      <h1>Details</h1>
      <ul>
        <li>{details?.name}</li>
        <li>{details?.email}</li>
      </ul>
      <button onClick={() => showDetail(false)}>
        Close
      </button>
    </div>
  )
}
