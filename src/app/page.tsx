import dynamic from "next/dynamic";
import { ProjectsSection } from "@/components/sections/projects-section";

const HeroSection = dynamic(
  () => import("@/components/sections/hero-section").then((mod) => ({ default: mod.HeroSection })),
  { ssr: false }
);

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
