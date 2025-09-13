import { createBrowserRouter } from "react-router";
import {HomePage, Picture} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        path: "home",
        Component: HomePage,
      },
      {
        path: "picture/:picId",
        Component: Picture,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.showId}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
]);
