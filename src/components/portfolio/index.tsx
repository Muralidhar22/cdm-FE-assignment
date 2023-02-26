import Link from "next/link";

import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";
import {
  useProfileContext,
  ProfileContextType,
} from "@/contexts/Profile.context";
import StatusBox from "./StatusBox";
import ProjectContainer from "./ProjectContainer";
import PlaygroundContainer from "./PlaygroundContainer";
import CertificateContainer from "./CertificateContainer";

const Portfolio = () => {
  const { portfolioData } = usePortfolioContext() as PortfolioContextType;
  const { profileData } = useProfileContext() as ProfileContextType;
  const isAnyProjectsForDisplay = portfolioData.projects.find(
    (project) => project.hasDisplayed
  );
  const isAnyCertsForDisplay = portfolioData.certificates.find(
    (cert) => cert.hasDisplayed
  );
  const isAnyPgsForDisplay = portfolioData.playgrounds.find(
    (pg) => pg.hasDisplayed
  );

  return (
    <div>
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Stats</h2>
        <div className="grid grid-cols-2 gap-5">
          <StatusBox
            data={portfolioData.stats.longestStreak ?? 0}
            img="/assets/lightning.svg"
            label="longest streak"
          />
          {profileData.visibilityXP && (
            <StatusBox
              data={portfolioData.stats.experience ?? 0}
              img="/assets/starfour.svg"
              label="experience points"
            />
          )}

          {profileData.visibilityBadges && (
            <StatusBox
              data={portfolioData.stats.league}
              img="/assets/cup.svg"
              label="current league"
            />
          )}
          <StatusBox
            data={portfolioData.stats.longestStreak ?? 0}
            img="/assets/heartbeat.svg"
            label="karma points"
          />
        </div>
      </section>
      <section className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link
            href="/edit?details=portfolio"
            className="font-semibold text-[#4F46E5]"
          >
            Create New Project
          </Link>
        </div>

        {portfolioData.projects.length > 0 && isAnyProjectsForDisplay ? (
          <div className="gap-5 grid grid-cols-2">
            {portfolioData.projects.map(
              (project) =>
                project.hasDisplayed && (
                  <ProjectContainer key={project.id} data={project} />
                )
            )}
          </div>
        ) : (
          <span className="p-6 text-center border-dashed border-2 rounded-md block text-semibold text-zinc-400">
            Add your projects to showcase!
          </span>
        )}
      </section>
      <section className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Playgrounds</h2>
          <Link
            href="/edit?details=portfolio"
            className="font-semibold text-[#4F46E5]"
          >
            Create New Playground
          </Link>
        </div>

        {portfolioData.playgrounds.length > 0 && isAnyPgsForDisplay ? (
          <div className="grid grid-cols-2 gap-5">
            {portfolioData.playgrounds.map((pg) => (
              <PlaygroundContainer key={pg.id} data={pg} />
            ))}
          </div>
        ) : (
          <span className="p-6 text-center border-dashed border-2 rounded-md block text-semibold text-zinc-400">
            Add your playgrounds to showcase!
          </span>
        )}
      </section>
      <section className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Certificates</h2>
          <Link
            href="/edit?details=portfolio"
            className="font-semibold text-[#4F46E5]"
          >
            Add new certificate
          </Link>
        </div>
        {portfolioData.certificates.length > 0 && isAnyCertsForDisplay ? (
          <div className="grid grid-cols-2 gap-5">
            {portfolioData.certificates.map((cert) => (
              <CertificateContainer key={cert.title} data={cert} />
            ))}
          </div>
        ) : (
          <span className="p-6 text-center border-dashed border-2 rounded-md block text-semibold text-zinc-400">
            Add your certificates to showcase!
          </span>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
