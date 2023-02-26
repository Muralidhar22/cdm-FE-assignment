import { TechType } from "./technologies";
import MyDate from "./months";

export type WorkExperienceType = {
  id: string;
  companyLogo?: string;
  title: string;
  location: string;
  jobDescription: string;
  jobResponsibilities: string[];
  duration: {
    from: MyDate;
    to?: MyDate;
    isPresent?: boolean;
  };
  company: string;
};

export type ResumeDataType = {
  description: string;
  workExperience: WorkExperienceType[];
  techSkills: TechType[];
  interests: { id: string; name: string }[];
  languages: { id: string; language: string; flagPicture?: string }[];
};
