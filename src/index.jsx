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
import NewFile from "./pages/newfile";

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
        },
        {
          path:"newfile",
          element:<NewFile/>,
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