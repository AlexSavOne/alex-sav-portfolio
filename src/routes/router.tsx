// src/routes/router.tsx
import React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Navigate to="/" replace /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
