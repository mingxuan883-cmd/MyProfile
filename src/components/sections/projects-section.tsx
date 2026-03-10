"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  // Placeholder projects with empty content
  const projects = [
    {
      id: 1,
      name: "AeroTraceX",
      description: "A React-based aircraft tracking application that displays real-time flight data on Google Maps with smooth airplane animations using WGS 84 coordinates.",
      technologies: ["React", "Java", "Node.js", "Tailwind", "TypeScript", "MySQL"],
      imageUrl: "/gif/AeroTraceX.gif",
    },
    {
      id: 2,
      name: "TBoostAI",
      description: "TBoost AI is building the future of car ownership with intelligent automotive assistance powered by AI.",
      technologies: ["Spring Boot 3.x", "Spring Cloud", "Spring Data JPA", "MySQL", "Redis", "JWT", "WebFlux", "Vue", "Element UI", "Nacos"],
      imageUrl: "/gif/tboostai.png",
    },
    {
      id: 3,
      name: "Rental Management",
      description: "A comprehensive rental management system for property management and tenant operations",
      technologies: ["Python", "FastAPI", "Docker"],
      imageUrl: "/gif/RentalManagement.gif",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width={640}
                        height={360}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {project.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
