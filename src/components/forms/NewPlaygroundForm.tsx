import { nanoid } from "nanoid"
import { useState, SetStateAction } from "react"
import Link from "next/link";

import { technologies } from "@/constants/technologies";
import FormInputBox from "../FormInputBox";
import { TechType } from "@/types/technologies";
import { PlaygroundType, PortfolioDataType } from "@/types/portfolio";
import PgTechStackInput from "../portfolio/PgTechStackInput";

type NewPlaygroundFormPropsType = {
    setPortfolioData: React.Dispatch<SetStateAction<PortfolioDataType>>
}

const INITIAL_FORM_DATA: PlaygroundType = {
    hasDisplayed: false,
    id: nanoid(),
    participants: [],
    techStack: {} as TechType,
    title: ""
}

const NewPlaygroundForm = ({ setPortfolioData }: NewPlaygroundFormPropsType) => {
    const [formData, setFormData] = useState<PlaygroundType>(INITIAL_FORM_DATA)
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }
    
    const onChangeTechStackHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = technologies[e.target.value]
        setFormData(prev => ({ ...prev, techStack: { ...value } }))
    }
    
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if(formData) {
            setPortfolioData((prev) => ({ ...prev, playgrounds: [...prev.playgrounds, { ...formData}] }))
        }
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
                    focusBorderClr="border-primary-600"
               />
               <label htmlFor="techstack" className="block font-semibold text-sm" >Select tech stack for playground:</label>

                {Object.keys(technologies).map((tech) => (
                    <>
                    {
                          <PgTechStackInput 
                            name="techStack"
                            tech={tech}
                            value={tech}
                            onChangeTechStackHandler={onChangeTechStackHandler}
                            
                          />
                    }
                    </>
                 ))}
                 
                 <div className="flex gap-2">
                    <Link shallow href="/edit?details=portfolio" className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>

                    <button type="submit" className="cursor-pointer text-white bg-primary-600 rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
                </div>
                 
               </form>
               </div>
    )
}

export default NewPlaygroundForm;