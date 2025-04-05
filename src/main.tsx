import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./Router/index";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
