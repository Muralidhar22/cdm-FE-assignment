import Image from "next/image";

import Technology from "@/types/technologies";
import { technologyIcons } from "@/constants/technologyIcons";

const ProjectContainer = ({ img, title, technology }: { img: string, title: string, technology: Technology[] }) => {
    return (
        <div className="p-4 border-2 border-zinc-100 bg-zinc-50 rounded-lg">
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
                technology.map((tech) => (
                    <span key={tech}>
                        <Image
                            src={technologyIcons[tech]}
                            alt={tech}
                            width={45}
                            height={45}
                        />
                        <span>{tech}</span>
                    </span>
                ))
            }
        </div>
    )
}

export default ProjectContainer;