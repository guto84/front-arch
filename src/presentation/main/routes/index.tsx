import { createBrowserRouter } from "react-router-dom"
import { MakeCreateUsers } from "../factories/users/create-users";
import { MakeListUsers } from "../factories/users/list-users";
import { ListUsers2 } from "../../view/pages/users/list-2";
import { ListUsers3 } from "../../view/pages/users/list-3";

export const router = createBrowserRouter([
  {
    path: "/users",
    element: <MakeListUsers />
  },
  {
    path: "/users2",
    element: <ListUsers2 />
  },
  {
    path: "/users3",
    element: <ListUsers3 />
  },
  {
    path: "/users/create",
    element: <MakeCreateUsers />
  },
]);
