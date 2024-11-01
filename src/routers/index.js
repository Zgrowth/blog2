import { Navigate } from "react-router-dom";
import { lazy } from "react";
// 使用路由懒加载（lazy）
const Home = lazy(() => import("../pages/Home"));
const Create = lazy(() => import("../pages/Create"));

const routers = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
];
export default routers;