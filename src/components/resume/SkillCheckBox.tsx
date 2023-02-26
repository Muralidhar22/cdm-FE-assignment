import { useState } from "react"

type SkillCheckBoxPropsType = { 
    skillId: string
    skillName: string
    hasTechSkill:  (compareSkill: string) => boolean
    onChangeSkillHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SkillCheckBox = ({ skillId, skillName, hasTechSkill, onChangeSkillHandler }: SkillCheckBoxPropsType) => {
    
    const [selected, setSelected] = useState(() => hasTechSkill(skillId))
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(prev => !prev)
        onChangeSkillHandler(e)
    }
    
    return (
        <>
        <label className={`cursor-pointer px-4 p-2 border-2 rounded-md border-2 select-none ${selected ? "border-green-300 bg-green-50" : "border-zinc-100"}`} htmlFor={skillName}>
                       {skillName} <input id={skillName} type="checkbox" value={skillId} onChange={onChangeHandler} checked={selected} name={skillName} />
                    </label>
        </>
    )
}

export default SkillCheckBox;