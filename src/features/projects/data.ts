// src/features/projects/data.ts
import { Project } from "./project.types";

export const projects: Project[] = [
  {
    id: "stellar-burger",
    title: "Онлайн-магазин бургеров",
    description:
      "React, TypeScript, Jest, Cypress, Webpack, Git, npm. Реализовал функционал регистрации профиля, создания заказа, управления ингредиентами и авторизацию.",
    image: "https://i.postimg.cc/fLVksjd1/stellarburger.png",
    link: "https://github.com/AlexSavOne/stellar-burger",
  },
  {
    id: "gendiff",
    title: "Вычислитель отличий",
    description:
      "JavaScript, Node.js, Commander.js, Jest, ESLint, Git, Make. Разработал консольную утилиту для нахождения различий между структурами данных с поддержкой форматов yaml и json.",
    image: "https://i.postimg.cc/QMxH4rd8/gendiff.png",
    link: "https://github.com/AlexSavOne/gendiffer",
  },
  {
    id: "mesto",
    title: "Аналог Instagram",
    description:
      "HTML, CSS, JavaScript, npm, Webpack, Babel, Git. Реализовал редактирование профиля, добавление фото и систему лайков.",
    image: "https://i.postimg.cc/BvYtRwjx/mesto.png",
    link: "https://github.com/AlexSavOne/mesto-project-ff",
  },
];
