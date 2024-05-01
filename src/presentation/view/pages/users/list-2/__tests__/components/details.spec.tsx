import { render, screen } from '@testing-library/react';
import { DetailsComponent } from '../../components/details/details.component';

describe('Details', () => {
  it('renders loading message when isLoading is true', () => {
    render(<DetailsComponent isOpen={true} showDetail={() => {}} details={undefined} isLoading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders null when isOpen is false', () => {
    render(<DetailsComponent isOpen={false} showDetail={() => {}} details={undefined} isLoading={false} />);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
  });

  it('renders details when isOpen is true and isLoading is false', () => {
    const details = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    render(<DetailsComponent isOpen={true} showDetail={() => {}} details={details} isLoading={false} />);
    expect(screen.getByText(details.name)).toBeInTheDocument();
    expect(screen.getByText(details.email)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });
});
