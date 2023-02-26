import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { nanoid } from "nanoid";

import { PortfolioDataType } from "@/types/portfolio";
import { fetchRandomTech, fetchMultipleTech } from "@/utils/fetchTech";
import { format } from "date-fns";

const value = fetchRandomTech();

const INITIAL_PORTFOLIO_DATA: PortfolioDataType = {
  playgrounds: [
    {
      id: nanoid(),
      participants: [],
      title: "playground title",
      techStack: fetchRandomTech(),
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
      techStack: fetchMultipleTech(2),
      title: "Personal Portfolio Website",
      projectUrl: "",
      hasDisplayed: true,
    },
    {
      id: nanoid(),
      imageSrc: "",
      techStack: fetchMultipleTech(2),
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

export type PortfolioContextType = {
  portfolioData: PortfolioDataType;
  setPortfolioData: Dispatch<SetStateAction<PortfolioDataType>>;
};

type PortfolioProviderPropsType = {
  children: ReactNode;
};

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const PortfolioProvider = ({ children }: PortfolioProviderPropsType) => {
  const [portfolioData, setPortfolioData] = useState(INITIAL_PORTFOLIO_DATA);
  const value = { portfolioData, setPortfolioData };
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
