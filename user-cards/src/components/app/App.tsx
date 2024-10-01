import MainPage from "@/pages/main-page/main-page";
import { AppRoute } from "@utils/constant";
import { createHashRouter, RouteObject, RouterProvider } from "react-router-dom";
import ErrorMessage from "../error-message/error-message";
import EditUserPage from "@/pages/edit-user-page/edit-user-page";
import { useAppDispatch } from "@/utils/hooks";


const routes: RouteObject[] = [
  {
    path: AppRoute.Main,
    element: <MainPage />,
    errorElement: <ErrorMessage/>,
  },

  {
    path: `${AppRoute.EditUser}/:id`,
    element: <EditUserPage />,
    errorElement: <ErrorMessage/>,
  },
];

const router = createHashRouter(routes);

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  return <RouterProvider router={router} />;
}


export default App
