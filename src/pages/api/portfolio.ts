import type { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { PortfolioDataType } from "@/types/portfolio";
import { fetchMultipleTech } from "@/utils/fetchTech";
import { format } from "date-fns";
import { TechType } from "@/types/technologies";

const value = fetchMultipleTech(1) as TechType;

const data: PortfolioDataType = {
  playgrounds: [
    {
      id: nanoid(),
      participants: [],
      title: "playground title",
      techStack: value as TechType,
      hasDisplayed: true,
      createDateTime: Date.now(),
    },
  ],
  certificates: [
    {
      id: nanoid(),
      certUrl: "",
      issueDate: `${format(new Date(), "yyyy-MM-dd")}`,
      title: `Advanced theoretical ${value.displayName}`,
      technology: { ...value },
      certType: "technology",
      hasDisplayed: true,
    },
  ],
  projects: [
    {
      id: nanoid(),
      imageSrc: "/assets/portfolio.png",
      techStack: fetchMultipleTech(2) as TechType[],
      title: "Personal Portfolio Website",
      projectUrl: "",
      hasDisplayed: true,
    },
    {
      id: nanoid(),
      imageSrc: "",
      techStack: fetchMultipleTech(2) as TechType[],
      title: "Personal Portfolio Website 2",
      projectUrl: "",
      hasDisplayed: true,
    },
  ],
  stats: {
    longestStreak: 2,
    league: "Novice",
    karma: 120,
    experience: 1200,
  },
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default handler;
