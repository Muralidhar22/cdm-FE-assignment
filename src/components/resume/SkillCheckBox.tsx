import { technologies } from "@/constants/technologies";
import { useState } from "react"

type SkillCheckBoxPropsType = { 
    skill: string
    hasTechSkill:  (compareSkill: string) => boolean
    onChangeSkillHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SkillCheckBox = ({ skill, hasTechSkill, onChangeSkillHandler }: SkillCheckBoxPropsType) => {
    
    const [selected, setSelected] = useState(() => hasTechSkill(technologies[skill].id))
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(prev => !prev)
        onChangeSkillHandler(e)
    }
    
    return (
        <>
        <label className={`cursor-pointer px-4 p-2 border-2 rounded-md border-2  ${selected ? "border-green-300 bg-green-50" : "border-zinc-100"}`} htmlFor={skill} key={skill}>
                       {technologies[skill].displayName} <input id={skill} type="checkbox" onChange={onChangeHandler} checked={selected} name={skill} />
                    </label>
        </>
    )
}

export default SkillCheckBox;