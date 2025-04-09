// import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'

// const container = document.getElementById('root') as HTMLDivElement
// const root = createRoot(container)

// root.render(<App />)
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React from "react";
  import ReactDOM from "react-dom/client";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },

    {
        path: "/dep-da-dep-dang",
        element: <h1>Bất ngờ chưaaa</h1>
      },
  ]);
  
  const root = document.getElementById("root");
  
  ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
  );
  
