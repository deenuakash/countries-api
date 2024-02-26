import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";

const CountryDetails = React.lazy(() =>
  import("./components/CountryDetails.jsx")
);

const countryLoader = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
  );
  const data = await res.json();
  return data;
};

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
        loader: countryLoader,
        element: (
          <Suspense fallback={<Loader />}>
            <CountryDetails />
          </Suspense>
        ),
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
