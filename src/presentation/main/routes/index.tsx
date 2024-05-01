import { createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'
import { MakeCreateUsers } from "../factories/users/create-users";
import { MakeListUsers } from "../factories/users/list-users";
import { ListUsers2 } from "../../view/pages/users/list-2";

const queryClient = new QueryClient()

export const router = createBrowserRouter([
  {
    path: "/users",
    element: 
    <QueryClientProvider client={queryClient}>
      <MakeListUsers />
    </QueryClientProvider>
  },
  {
    path: "/users2",
    element: 
    <QueryClientProvider client={queryClient}>
      <ListUsers2 />
    </QueryClientProvider>
  },
  {
    path: "/users/create",
    element: 
    <QueryClientProvider client={queryClient}>
      <MakeCreateUsers />
    </QueryClientProvider>
  },
]);
