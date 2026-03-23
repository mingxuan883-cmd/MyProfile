import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
