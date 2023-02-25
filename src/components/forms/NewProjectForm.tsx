import { nanoid } from "nanoid"
import { useState, SetStateAction } from "react"
import Link from "next/link";

import { technologies } from "@/constants/technologies";
import FormInputBox from "../FormInputBox";
import { TechType } from "@/types/technologies";
import { ProjectType, PortfolioDataType } from "@/types/portfolio";

type NewProjectFormPropsType = {
    setPortfolioData: React.Dispatch<SetStateAction<PortfolioDataType>>
}

const INITIAL_FORM_DATA: ProjectType = {
    hasDisplayed: false,
    id: nanoid(),
    imageSrc: "",
    projectUrl: "",
    techStack: [],
    title: ""
}

const NewProjectForm = ({ setPortfolioData }: NewProjectFormPropsType) => {
    const [selectedSkills, setSelectedSkills] = useState<TechType[]>([])
    const [formData, setFormData] = useState<ProjectType>(INITIAL_FORM_DATA)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name
        setFormData(prev => ({ ...prev, [key]: [e.target.value] }))
    }
    
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if(formData) {
            setPortfolioData((prev) => ({ ...prev, projects: [...prev.projects, { ...formData}] }))
        }
    }
    
    const addSkill = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTech = technologies[e.target.value]
        setSelectedSkills(prev => prev ? [...prev, {...newTech}] : [{...newTech}])
        setFormData(prev => ({ ...prev, techStack: prev.techStack ? [...prev.techStack, {...newTech}] : [{...newTech}] } ))
    }
    
    const removeSkill = (id: string) => {
        const filteredStack = selectedSkills?.filter(skill => skill.id !== id)
        setSelectedSkills(filteredStack)
    }
    
    const isTechStackSelected = (verifyId: string) => {
        const isSelected = selectedSkills && selectedSkills?.find((skill) => skill.id === verifyId)
        return isSelected 
    }
    
    return (
        <div className="rounded-md bg-primary-50 p-6">
            <form onSubmit={onSubmitHandler}>
                <FormInputBox
                    name="title"
                    type="text"
                    label="project title"
                    id="title"
                    onChangeHandler={onChangeHandler}
                    value={formData.title}
                    required={true}
               />
               <FormInputBox 
                    name="imageSrc"
                    label="project snapshot URL"
                    type="url"
                    id="imageSrc"
                    onChangeHandler={onChangeHandler}
                    value={formData.imageSrc}
                    required={true}
               />
               <FormInputBox 
                    name="projectUrl"
                    label="project URL"
                    type="url"
                    id="projectUrl"
                    onChangeHandler={onChangeHandler}
                    value={formData.projectUrl}
                    required={true}
               />

                <label htmlFor="techstack" className="font-semibold text-sm">Tech stack:</label>
                <div className="flex flex-wrap gap-1">    
                    {selectedSkills?.map((skill) => (
                        <span className="rounded-md border-2 bg-primary-600 p-1 text-white relative text-base">
                            {skill.displayName}
                            <span className="text-base absolute bg-zinc-500 rounded-full -top-1 -right-1 w-4 h-4 p-0.5 rounded-full bg-zinc text-white cursor-pointer grid place-content-center" onClick={() => removeSkill(skill.id)}>-</span>
                        </span>
                    ))}
                </div>
                <select onChange={addSkill} required={selectedSkills.length > 0} className="w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-primary-600 cursor-pointer" value="" name="tech stack" id="techstack">
                <option value="">--select tech stack--</option>
                {Object.keys(technologies).map((tech) => (
                    <>
                    {
                        !isTechStackSelected(technologies[tech].id) &&
                        <option value={tech}>{technologies[tech].displayName}</option>
                    }
                    </>
                 ))}
                 </select>
                <div className="flex gap-2">
                    <Link href="/edit?details=portfolio" shallow className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>

                    <button type="submit" className="cursor-pointer text-white bg-primary-600 rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default NewProjectForm;