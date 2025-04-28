// src/pages/Home.tsx
import HeroSection from "../features/hero/HeroSection";

export default function Home() {
  return (
    <HeroSection
      title="Привет, я Александр 👋"
      subtitle="Frontend-разработчик. Создаю красивые и функциональные веб-интерфейсы."
      buttonText="Посмотреть проекты"
      buttonLink="/projects"
    />
  );
}
