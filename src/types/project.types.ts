// src/features/projects/project.types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: {
    label: string;
    color: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  }[];
}
