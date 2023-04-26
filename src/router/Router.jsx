import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    //   {
    //     path: "/about",
    //     element: <About />,
    //   },
    ],
  },
]);

export default router;