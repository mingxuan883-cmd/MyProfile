// Types
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  bioLong: string;
  avatar: string;
  location: string;
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
  steam?: string;
  website: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  logoUrl?: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  githubUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  githubImageUrl?: string;
  technologies: string[];
  featured: boolean;
  pinned: boolean;
  stars?: number;
  forks?: number;
  updatedAt?: string;
}

// Data loading functions
export async function getPersonalInfo(): Promise<PersonalInfo> {
  return {
    name: "Andrew Yuan",
    title: "Full Stack Engineer",
    bio: "Backend Software Engineer with 4+ years of experience building scalable backend systems.",
    bioLong: "Backend Software Engineer with 4+ years of experience designing and building scalable, secure, and data-driven backend systems. Strong foundation in object-oriented programming, RESTful API design, and database-driven architectures. Experienced in cloud-native development, SQL optimization, and high-concurrency services.",
    avatar: "/file.svg",
    location: "Vancouver, BC, Canada",
    email: "mingxuan883@gmail.com",
    github: "YuKiAndrew",
    twitter: "",
    linkedin: "mingxuan-yuan-6084aab7",
    website: "",
  };
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  return [
    {
      company: "Uniuni",
      position: "Software Developer",
      startDate: "2025-08",
      endDate: "2025-11",
      description: "Worked on package dispatch system. Handled package status transitions and state changes. Optimized SQL queries, reducing response time from 1 minute to 6 seconds.",
      technologies: ["PHP", "SQL", "Database Optimization"],
      url: "",
    },
    {
      company: "TBoostAI",
      position: "Software Engineer",
      startDate: "2025-03",
      endDate: "2025-08",
      description: "Built web applications with React. Integrated Milvus vector database for semantic search. Developed AI agent using Spring Boot with SMS and email features.",
      technologies: ["JavaScript", "React", "Java", "Spring Boot", "Milvus", "Azure"],
      url: "",
    },
    {
      company: "China Unicom Xi'an Software Research Institute",
      position: "Software Engineer",
      startDate: "2021-05",
      endDate: "2023-09",
      description: "Worked on 10010 hotline system development. Built product recommendation module that handled 80,000 QPS. Optimized data dashboard, reducing query time from 2 seconds to 200ms.",
      technologies: ["C#", ".NET", "React", "Redis", "Kafka", "Elasticsearch", "MySQL", "Docker"],
      url: "",
    },
    {
      company: "ShunFeng Technology",
      position: "Full Stack Engineer",
      startDate: "2020-05",
      endDate: "2021-05",
      description: "Worked on payment system development. Built cash management system using Kafka. Developed frontend with Vue and backend modules with C++.",
      technologies: ["C++", "Vue", "Redis", "Kafka", "ECharts"],
      url: "",
    },
  ];
}

export async function getProjects(): Promise<Project[]> {
  // TODO: Implement data loading
  return [];
}

export async function getContactInfo() {
  return {
    email: "mingxuan883@gmail.com",
    responseTime: "24-48 hours",
    availableForWork: true,
  };
}
