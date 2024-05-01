import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { router } from './presentation/main/routes';
// import { makeServer } from './miragejs/server'

// if (process.env.NODE_ENV === "development") {
  // makeServer({ environment: "development" })
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
