import { createBrowserRouter, RouterProvider } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
