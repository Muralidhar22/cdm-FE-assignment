import { ReactNode } from "react";

import { SocialsProvider } from "@/contexts/Socials.context";
import { PortfolioProvider } from "@/contexts/Portfolio.context";
import { ProfileProvider } from "@/contexts/Profile.context";
import { ResumeProvider } from "@/contexts/Resume.context";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProfileProvider>
      <PortfolioProvider>
        <ResumeProvider>
          <SocialsProvider>{children}</SocialsProvider>
        </ResumeProvider>
      </PortfolioProvider>
    </ProfileProvider>
  );
};

export default Providers;
