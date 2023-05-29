import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

/*const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);*/

/*const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductPage /> },
]);*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
    errorElement: <ErrorPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
