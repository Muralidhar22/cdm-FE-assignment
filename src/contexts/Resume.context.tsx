import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
} from "react";
import { nanoid } from "nanoid";

import { fetchMultipleTech } from "@/utils/fetchTech";
import { ResumeDataType } from "@/types/resume";
import { TechType } from "@/types/technologies";

const INITIAL_RESUME_DATA: ResumeDataType = {
  description:
    "A self-driven, versatile, reliable, diligent individual who is calm a cheerful with a team-minded approach to work and getting things done. A student who is passionate and with a keen eye for design.",
  techSkills: fetchMultipleTech(4) as TechType[],
  workExperience: [
    {
      id: nanoid(),
      company: "Google",
      duration: {
        from: { month: "April", year: 2021 },
        isPresent: true,
      },
      location: "Dublin",
      companyLogo: "/assets/google.svg",
      jobDescription:
        "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites.",
      jobResponsibilities: [
        "Create an appealing design and turn it into a WordPress plugin",
        "Manage all technical aspects of the CMS",
        "Conducting website/application tests",
      ],
      title: "Front End Developer",
    },
  ],
  interests: [
    { id: nanoid(), name: "Podcasts" },
    { id: nanoid(), name: "Economics" },
    { id: nanoid(), name: "Finance" },
    { id: nanoid(), name: "Space" },
  ],
  languages: [
    {
      id: nanoid(),
      language: "English",
      flagPicture: "/assets/united-states-of-america.svg",
    },
  ],
};

export type ResumeContextType = {
  resumeData: ResumeDataType;
  setResumeData: Dispatch<ResumeDataType>;
};

type ResumeProviderPropsType = {
  children: ReactNode;
};

const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider = ({ children }: ResumeProviderPropsType) => {
  const [resumeData, setResumeData] =
    useState<ResumeDataType>(INITIAL_RESUME_DATA);
  const value = { resumeData, setResumeData };
  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export const useResumeContext = () => useContext(ResumeContext);
