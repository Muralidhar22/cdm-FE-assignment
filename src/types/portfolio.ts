import { TechType } from "./technologies";

export type CertType = "technology" | "achievement";

export type ProjectType = {
  id: string;
  imageSrc: string;
  title: string;
  techStack: TechType[];
  projectUrl: string;
  hasDisplayed: boolean;
};

export type PlaygroundType = {
  id: string;
  title: string;
  techStack: TechType;
  participants: string[];
  hasDisplayed: boolean;
  createDateTime: Date | number;
};

export type CertificateType = {
  id: string;
  technology?: TechType;
  title: string;
  certType: CertType;
  issueDate: string;
  hasDisplayed: boolean;
  certUrl: string;
};

export type StatsType = {
  longestStreak: number | null;
  league: "Novice" | "Pro" | "Expert" | "Intermediate";
  karma: number | null;
  experience: number | null;
};

export type PortfolioDataType = {
  playgrounds: PlaygroundType[];
  certificates: CertificateType[];
  projects: ProjectType[];
  stats: StatsType;
};
