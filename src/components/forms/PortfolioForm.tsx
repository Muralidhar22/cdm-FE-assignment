import Link from "next/link";
import { useState } from "react";

import FormInputBox from "../FormInputBox";
import ProjectContainer from "../portfolio/ProjectContainer";
import PlaygroundContainer from "../portfolio/PlaygroundContainer";
import CertificateContainer from "../portfolio/CertificateContainer";
import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context";

const PortfolioForm = () => {
    const { portfolioData, setPortfolioData } = usePortfolioContext() as PortfolioContextType
    const [ portfolioFormData, setPortfolioFormData ] = useState(portfolioData)
    const [displayProjectForm, setDisplayProjectForm] = useState(false)
    const [displayCertForm, setDisplayCertForm] = useState(false)
    const [displayPgForm, setDisplayPgForm] = useState(false)
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
    }
    
    return (
        <div className="grow">
        <section>
                <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Projects</h2>
                    <Link href="/edit?details=portfolio" className="font-semibold text-[#4F46E5]">Add New Project</Link>        
                </div>
                {
                    portfolioData.projects.map((project) => (
                        <ProjectContainer 
                            key={project.title}
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
                            key={pg.title+pg.technology}
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
            <div className="flex gap-2">
            <Link href="/" className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>

            <button onClick={onSubmitHandler} className="cursor-pointer text-white bg-[#4F46E5] rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
            </div>
        </div>
    )
}

export default PortfolioForm;