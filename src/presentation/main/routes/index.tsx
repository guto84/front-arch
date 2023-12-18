import { createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'
import { MakeListUsers } from '../factories/users/list-users';

const queryClient = new QueryClient()

export const router = createBrowserRouter([
  {
    path: "/users",
    element: 
    <QueryClientProvider client={queryClient}>
      <MakeListUsers />
    </QueryClientProvider>
  },
]);
