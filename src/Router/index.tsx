import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import CssHome from "../Pages/CSS";
import CssWaterFall from "../Pages/CSS/WaterFall";
import ReactHome from "../Pages/React";
import ReactUseLocalStorage from "../Pages/React/useLocalStorage";
import ScrollView from "../Pages/React/scrollView";

export const CSSLinks = {
  waterfall: "/css/waterfall",
};

export const ReactLinks = {
  uselocalstorage: "/react/uselocalstorage",
  scrollView: "/react/scrollview",
};

export interface IRouter {
  [key: string]: string;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/css/waterfall"} replace /> },
      {
        path: "css",
        element: <CssHome />,
        children: [
          {
            index: true,
            element: <Navigate to={CSSLinks.waterfall} replace />,
          },
          { path: CSSLinks.waterfall, element: <CssWaterFall /> },
        ],
      },
      {
        path: "js",
      },
      {
        path: "react",
        element: <ReactHome />,
        children: [
          {
            index: true,
            element: <Navigate to={ReactLinks.uselocalstorage} replace />,
          },
          {
            path: ReactLinks.uselocalstorage,
            element: <ReactUseLocalStorage />,
          },
          {
            path: ReactLinks.scrollView,
            element: <ScrollView />
          }
        ],
      },
    ],
  },
]);
