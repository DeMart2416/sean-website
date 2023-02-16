import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Password from "./components/Password";
import Navigation from "./components/Navigation";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/password", element: <Password /> },
    { path: "/header", element: <Navigation /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
