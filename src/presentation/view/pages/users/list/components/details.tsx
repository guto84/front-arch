import React from 'react';
import { User } from '../../../../../../modules/users/domain/entities/user.entity';

type ModalProps = {
  isOpen: boolean
  showDetail: (value: boolean) => void
  details: User | undefined
  isLoading: boolean
}

export const Details: React.FC<ModalProps> = ({ isOpen, showDetail, details, isLoading }) => {
  if (isLoading) return 'Loading...'
  
  if (!isOpen) return null

  return (
    <div>
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
