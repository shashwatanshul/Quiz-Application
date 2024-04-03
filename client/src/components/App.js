import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import AdminPanel from "./AdminPanel";
import { CheckUserExist } from "../helper/helper";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: "/admin",
    element: <AdminPanel></AdminPanel>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
