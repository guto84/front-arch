import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TableComponent } from '../components/table'

describe('Table', () => {
  const mockData = [
    { id: 1, name: 'John Doe', email: 'john@email.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com' },
  ]

  it('renders loading message when isLoading is true', () => {
    render(<TableComponent data={undefined} isLoading={true} error={null} handleDetails={() => {}} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders error message when error is present', () => {
    const errorMessage = 'An error has occurred: Network error'
    render(<TableComponent data={undefined} isLoading={false} error={'Network error'} handleDetails={() => {}} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('renders table with data when data is provided', () => {
    render(<TableComponent data={mockData} isLoading={false} error={null} handleDetails={() => {}} />)
    expect(screen.getByText('List users')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('calls handleDetails when view button is clicked', () => {
    const handleDetails = jest.fn()
    render(<TableComponent data={mockData} isLoading={false} error={null} handleDetails={handleDetails} />)
    const viewButton = screen.queryAllByText('View')[0]
    viewButton.click()
    expect(handleDetails).toHaveBeenCalledTimes(1)
    expect(handleDetails).toHaveBeenCalledWith(1)
  });
});
