import '@testing-library/jest-dom'
import { screen, render, fireEvent } from "@testing-library/react";
import { Form } from '../components/form'


describe('Form', () => {
  it('should render the basic fields', async () => {
    const mockLogin = jest.fn()
    render(<Form submit={mockLogin} />);

    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
      target: {
        value: "username",
      },
    })
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    })
  
    fireEvent.submit(screen.getByRole("button"))
  
    // await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0))
    // expect(mockLogin).toBeCalledWith("test@mail.com", "password")
    // expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("")
    // expect(screen.getByLabelText("password")).toHaveValue("")
  });
})
