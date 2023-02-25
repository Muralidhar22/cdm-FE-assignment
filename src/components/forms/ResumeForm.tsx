import Link from "next/link";
import { useState, useEffect } from "react"

import SkillCheckBox from "../resume/SkillCheckBox";
import { technologies } from "@/constants/technologies";
import { useResumeContext, ResumeContextType } from "@/contexts/Resume.context";
import UnSavedDialogBox from "../UnSavedDialogBox";

const ResumeForm = () => {
    const { resumeData, setResumeData } = useResumeContext() as ResumeContextType
    const [resumeFormData, setResumeFormData] = useState(resumeData)
    const [isFormChanged, setIsFormChanged] = useState(false)
    
    useEffect(() => {
        const isChanged = JSON.stringify(resumeFormData) !== JSON.stringify(resumeData)
        setIsFormChanged(isChanged)
    },[resumeFormData])
    
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setResumeData(resumeFormData)
        setIsFormChanged(false)
    }
    
    const onChangeSkillHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResumeFormData((prev) => ({ ...prev, 
            techSkills: [...prev.techSkills, { ...technologies[e.target.name] }] }))
    }
    
    const onChangeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setResumeFormData((prev) => ({ ...prev, description: e.target.value }))
    }
    
    const hasTechSkill = (compareSkill: string): boolean => {
        let hasSkill = false;
        resumeFormData.techSkills.forEach((skill) => {
            if(skill.id === compareSkill) {
                hasSkill = true
            }
        })
        return hasSkill
    }
    
    return (
        <div className="grow">
        <h1 className="text-2xl font-semibold">Resume Information</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="about" className="block font-semibold text-sm">About</label>
                <textarea onChange={onChangeTextHandler} name="about" id="about" value={resumeFormData.description} className="block w-full h-24 px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-zinc-900" rows={10}></textarea>
                <span className="text-zinc-500">Tell us about yourself</span>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Manage Tech Skills</h2>
                <div className="flex flex-wrap gap-1">    
                {Object.keys(technologies).map((skill) => (
                    <SkillCheckBox 
                        key={skill}
                        skill={skill}
                        hasTechSkill={hasTechSkill}
                        onChangeSkillHandler={onChangeSkillHandler}
                    />
                ))}
                </div>
            </div>
        <div className="flex gap-2">
        <Link href="/" className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>
        
        <button type="submit" className="cursor-pointer text-white bg-primary-600 rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
            </div>
            {
                isFormChanged
                &&
                <UnSavedDialogBox />
            }
        </form>
        </div>
    )
}

export default ResumeForm;