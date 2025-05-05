import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/alex-sav-portfolio/" className="logo">
          Alex Sav
        </Link>
        <div className="nav-links">
          <Link
            to="/alex-sav-portfolio/"
            className={location.pathname === "/alex-sav-portfolio/" ? "active" : ""}
          >
            Главная
          </Link>
          <Link
            to="/alex-sav-portfolio/about"
            className={location.pathname === "/alex-sav-portfolio/about" ? "active" : ""}
          >
            Обо мне
          </Link>
          <Link
            to="/alex-sav-portfolio/projects"
            className={location.pathname === "/alex-sav-portfolio/projects" ? "active" : ""}
          >
            Проекты
          </Link>
          <Link
            to="/alex-sav-portfolio/contact"
            className={location.pathname === "/alex-sav-portfolio/contact" ? "active" : ""}
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
