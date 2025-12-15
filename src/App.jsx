import { createBrowserRouter, RouterProvider } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { DashboardScreen } from "./pages/DashboardScreen";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/admin",
    Component: DashboardScreen,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
