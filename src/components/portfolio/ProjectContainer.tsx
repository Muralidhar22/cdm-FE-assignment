import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { TechType } from "@/types/technologies";
import { PortfolioDataType } from "@/types/portfolio";

type ProjectComponentPropsType =  {
    img: string,
    title: string,
    techStack: TechType[]
    isSelected?: boolean
    isOption?: boolean,
    projectId?: string,
    setData?: Dispatch<SetStateAction<PortfolioDataType>>
}

const ProjectLayout = ({ img, title, techStack, isOption }: ProjectComponentPropsType ) => {
    return(
        <div className={`${!isOption && "p-4 border-2 rounded-lg border-zinc-100 bg-zinc-50"}`}>
            <div className="w-80 h-44 bg-[#C4C4C4] rounded">
                    {img 
                    &&
                    <Image
                        className="w-full h-full"
                        src={img}
                        alt={title}
                        width={320}
                        height={170}
                    /> 
                }
            </div>
            <h3 className="font-bold text-lg">{title}</h3>
            {
                techStack.map((tech) => {
                    return (
                    <span key={tech.id}>
                        <Image
                            src={tech.imageSrc}
                            alt={tech.displayName}
                            width={45}
                            height={45}
                        />
                        <span>{tech.displayName}</span>
                    </span>
                )})
            }
        </div>
    )
}

const ProjectContainer = ({ img, title, techStack, isOption, projectId, isSelected, setData }: ProjectComponentPropsType ) => {
    
    const onClickHandler = () => {
        if(setData) {     
            setData(prev => (
                {
                    ...prev,
                    projects: prev.projects.map((project) => (
                        project.id === projectId ?
                        { ...project, hasDisplayed: !project.hasDisplayed }
                        : project
                        ))
                }
            ))
        }
    }
    
    if(isOption) {
        return (
            <div onClick={onClickHandler} role="option" className={`cursor-pointer p-4 border-2 rounded-lg
                ${
                    isSelected ? "border-primary-600 bg-primary-50" : "border-zinc-100 bg-zinc-50"
                }
            `}>
                <ProjectLayout img={img} title={title} techStack={techStack} isOption={isOption} />        
            </div>
        )
    }
    
    return (
        <ProjectLayout img={img} title={title} techStack={techStack} isOption={isOption} />
    )
}

export default ProjectContainer;