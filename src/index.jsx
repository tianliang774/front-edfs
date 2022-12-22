import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Root from "./pages/root";
import FileViewer from "./pages/fileviewer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[{
      errorElement: <ErrorPage />,
      children:[
        {
          path:"fileviewer",
          element:<FileViewer/>,
        }
      ]
    }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);