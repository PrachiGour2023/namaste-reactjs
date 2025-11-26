import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { appRouter } from "./src/routes/PublicRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
