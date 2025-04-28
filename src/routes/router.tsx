// src/routes/router.tsx
import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
