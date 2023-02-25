import NewProjectForm from "../forms/NewProjectForm"
import ProjectContainer from "./ProjectContainer"

import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context"

const AddProject = () => {
    const { portfolioData, setPortfolioData } = usePortfolioContext() as PortfolioContextType
    
    return(
                <div className="grow">

                    <NewProjectForm setPortfolioData={setPortfolioData} />
                
                {
                    portfolioData.projects.map((project) => (
                        <ProjectContainer 
                            key={project.id}
                            projectId={project.id}
                            techStack={project.techStack}
                            title={project.title}
                            img={project.imageSrc}
                            isSelected={project.hasDisplayed}
                            isOption={true}
                            setData={setPortfolioData}
                        />
                    ))
                }
                </div>

    )
}

export default AddProject