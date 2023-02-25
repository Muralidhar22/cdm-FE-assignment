import Link from "next/link";

import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context";
import StatusBox from "./StatusBox";
import ProjectContainer from "./ProjectContainer";
import PlaygroundContainer from "./PlaygroundContainer";
import CertificateContainer from "./CertificateContainer";

const Portfolio = () => {
    const { portfolioData } = usePortfolioContext() as PortfolioContextType
    const isAnyProjectsForDisplay = portfolioData.projects.find((project) => project.hasDisplayed)
    const isAnyCertsForDisplay = portfolioData.certificates.find((cert) => cert.hasDisplayed)
    const isAnyPgsForDisplay = portfolioData.playgrounds.find((pg) => pg.hasDisplayed)
    
    return (
        <div>
            <section className="grid gap-3">
                <h2 className="text-2xl font-bold">Stats</h2>
                <StatusBox 
                    data={portfolioData.stats.longestStreak ?? 0}
                    img="/assets/Lightning.png"
                    label="longest streak"
                />
                <StatusBox 
                    data={portfolioData.stats.experience ?? 0}
                    img="/assets/StarFour.png"
                    label="experience points"
                />
                <StatusBox 
                        data={portfolioData.stats.league}
                        img="/assets/cup.png"
                        label="current league"
                    />
                <StatusBox 
                    data={portfolioData.stats.longestStreak ?? 0}
                    img="/assets/Heartbeat.png"
                    label="karma points"
                />
            </section>
            <section>
                <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Projects</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Create New Project</Link>        
                </div>
                {(portfolioData.projects.length > 0 && isAnyProjectsForDisplay ) ?
                    portfolioData.projects.map((project) => (
                        project.hasDisplayed &&
                        <ProjectContainer 
                            key={project.id}
                            techStack={project.techStack}
                            title={project.title}
                            img={project.imageSrc}
                        />
                    ))
                    : <span className="p-6 text-center border-dashed border-2 rounded-md block text-semibold text-zinc-400">Add your projects to showcase!</span>
                }
            </section>
            <section>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Playgrounds</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Create New Playground</Link>
                </div>
                {(portfolioData.playgrounds.length > 0 && isAnyPgsForDisplay)
                  ?  portfolioData.playgrounds.map((pg) => (
                        <PlaygroundContainer 
                            key={pg.id}
                            title={pg.title}
                            techStack={pg.techStack}
                        />
                    ))
                  : <span className="p-6 text-center border-dashed border-2 rounded-md block text-semibold text-zinc-400">Add your playgrounds to showcase!</span>
                }
            </section>
            <section>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Certificates</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Add new certificate</Link>
                </div>
                    {(portfolioData.certificates.length > 0 && isAnyCertsForDisplay)
                      ?  portfolioData.certificates.map((cert) => (
                            <CertificateContainer 
                                key={cert.title}
                                data={cert}
                            />
                        ))
                        : <span className="p-6 text-center border-dashed border-2 rounded-md block text-semibold text-zinc-400">Add your certificates to showcase!</span>
                    }
            </section>
        </div>        
    )
}

export default Portfolio;