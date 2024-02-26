import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.jsx";
import CountryDetails from "./components/CountryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "country/:name",
        element: <CountryDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
