import PageNotFound from "../component/PageNotFound";
import Desktop from "../page/Desktop";
import Home from "../page/Home";

export const routes = [
  {
    path: "/",
    element: <Desktop />,
    routes: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
