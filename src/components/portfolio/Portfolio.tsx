import Link from "next/link";

import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context";
import StatusBox from "./StatusBox";
import ProjectContainer from "./ProjectContainer";
import PlaygroundContainer from "./PlaygroundContainer";
import CertificateContainer from "./CertificateContainer";

const Portfolio = () => {
    const { portfolioData } = usePortfolioContext() as PortfolioContextType
    return (
        <div>
            <section className="grid gap-3">
                <h2 className="text-2xl font-bold">Stats</h2>
                <StatusBox 
                    data={portfolioData.stats.longestStreak}
                    img="/assets/Lightning.png"
                    label="longest streak"
                />
                <StatusBox 
                    data={portfolioData.stats.experience}
                    img="/assets/StarFour.png"
                    label="experience points"
                />
                <StatusBox 
                        data={portfolioData.stats.league}
                        img="/assets/cup.png"
                        label="current league"
                    />
                <StatusBox 
                    data={portfolioData.stats.longestStreak}
                    img="/assets/Heartbeat.png"
                    label="karma points"
                />
            </section>
            <section>
                <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Projects</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Create New Project</Link>        
                </div>
                {
                    portfolioData.projects.map((project) => (
                        <ProjectContainer 
                            key={project.id}
                            technology={project.technologies}
                            title={project.title}
                            img={project.imageSrc}
                        />
                    ))
                }
            </section>
            <section>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Playgrounds</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Create New Playground</Link>
                </div>
                {
                    portfolioData.playgrounds.map((pg) => (
                        <PlaygroundContainer 
                            key={pg.id}
                            title={pg.title}
                            technology={pg.technology}
                        />
                    ))
                }
            </section>
            <section>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Certificates</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Add new certificate</Link>
                </div>
                    {
                        portfolioData.certificates.map((cert) => (
                            <CertificateContainer 
                                key={cert.title}
                                data={cert}
                            />
                        ))
                    }
            </section>
        </div>        
    )
}

export default Portfolio;