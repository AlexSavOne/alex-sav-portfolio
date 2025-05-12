// src/constants/projects.data.ts
import { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: "foodzone",
    title: "FoodZone — доставка еды",
    description:
      "Tailwind CSS, Alpine.js, AOS, Google Fonts. Лендинг сервиса доставки еды с фильтрацией, адаптивным дизайном и анимациями. Разработан в стиле mobile-first.",
    image: "public/images/Foodzone.png",
    link: "https://github.com/AlexSavOne/foodzone-landing",
    technologies: [
      { label: "Tailwind CSS", color: "secondary" },
      { label: "Alpine.js", color: "info" },
      { label: "AOS", color: "info" },
      { label: "Google Fonts", color: "warning" },
    ],
  },
  {
    id: "cleanpro",
    title: "Клининг услуги",
    description:
      "HTML5, Tailwind CSS, AOS, Heroicons, Flexbox, Grid, Scroll Snap. Лендинг для клининговой компании с адаптивной версткой, анимациями и формой заявки. Проект для портфолио.",
    image: "public/images/Cleanpro.png",
    link: "https://github.com/AlexSavOne/cleanpro-landing",
    technologies: [
      { label: "HTML5", color: "primary" },
      { label: "Tailwind CSS", color: "secondary" },
      { label: "AOS", color: "info" },
      { label: "Heroicons", color: "warning" },
      { label: "Flexbox", color: "success" },
      { label: "Grid", color: "success" },
      { label: "CSS Scroll Snap", color: "info" },
    ],
  },
  {
    id: "stellar-burger",
    title: "Онлайн-магазин бургеров",
    description:
      "React, TypeScript, Jest, Cypress, Webpack, Git, npm. Реализовал функционал регистрации профиля, создания заказа, управления ингредиентами и авторизацию.",
    image: "https://i.postimg.cc/fLVksjd1/stellarburger.png",
    link: "https://github.com/AlexSavOne/stellar-burger",
    technologies: [
      { label: "React", color: "primary" },
      { label: "TypeScript", color: "secondary" },
      { label: "Jest", color: "success" },
      { label: "Cypress", color: "info" },
    ],
  },
  {
    id: "mesto",
    title: "Аналог Instagram",
    description:
      "HTML, CSS, JavaScript, npm, Webpack, Babel, Git. Реализовал редактирование профиля, добавление фото и систему лайков.",
    image: "https://i.postimg.cc/BvYtRwjx/mesto.png",
    link: "https://github.com/AlexSavOne/mesto-project-ff",
    technologies: [
      { label: "HTML", color: "primary" },
      { label: "CSS", color: "secondary" },
      { label: "JavaScript", color: "warning" },
      { label: "Webpack", color: "info" },
    ],
  },
];
