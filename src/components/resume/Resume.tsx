import Image from "next/image";

import { useResumeContext, ResumeContextType } from "@/contexts/Resume.context";
import { technologies } from "@/constants/technologies";

const Resume = () => {
    const { resumeData } = useResumeContext() as ResumeContextType
    return (
        <div>
            <section>
                <h2 className="font-bold text-2xl text-center">About me</h2>
                <div className="bg-zinc-50 border-2 border-zinc-100 rounded-2xl p-6 font-medium text-base">{resumeData.description}</div>
            </section>
            <section>
                <h2 className="font-bold text-2xl text-center">Work experience</h2>
                {
                    resumeData.workExperience.map(exp => (
                        <div key={exp.title} className="bg-zinc-50 border-2 border-zinc-100 rounded-2xl p-6 font-medium text-base flex gap-2">
                            <Image
                                width={34}
                                height={34}
                                src={exp.companyLogo ?? "/assets/company.svg"} 
                                alt={"company" + "logo"}
                            />
                            <div>
                                <h3 className="font-bold">{exp.title}</h3>
                                <span>{exp.company + " " + "Inc."}</span>
                            </div>
                            {}
                        </div>
                    ))
                }
            </section>
            <section>
                    <h2 className="font-bold text-2xl">Tech Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {
                            resumeData.techSkills.map((skill) => (
                                <div key={skill.id} className="text-base bg-zinc-100 text-zinc-900  font-semibold py-2 px-3 rounded-lg flex gap-2 items-center">
                                  <Image
                                    className="shrink-0" 
                                    width={20}
                                    height={20}
                                    alt={skill.displayName}
                                    src={skill.imageSrc}
                                />
                                <span>{skill.displayName}</span>
                            </div>
                            ))
                        }
                    </div>
            </section>
            <section>
                <h2 className="font-bold text-2xl">Interests</h2>
                <div className="flex flex-wrap gap-2">
                    {
                        resumeData.interests.map((interest) => (
                            <div key={interest.id} className="text-base bg-zinc-100 text-zinc-900  font-semibold py-2 px-3 rounded-lg">
                                {interest.name}
                            </div>
                        ))
                    }
                </div>
            </section>
            <section>
                <h2 className="font-bold text-2xl">Languages</h2>
                <div className="flex flex-wrap gap-2">
                {resumeData.languages.map((data) => (
                    <div key={data.id} className="text-base bg-zinc-100 text-zinc-900 font-semibold py-2 px-3 rounded-lg flex gap-1">
                        <Image 
                            width={20}
                            height={20}
                            alt={data.language + "flag"}
                            src={data?.flagPicture ?? ""} />
                        <span>{data.language}</span>
                    </div>
                ))}
                    
                </div>
            </section>
        </div>        
    )
}

export default Resume;