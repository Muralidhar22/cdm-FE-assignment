import { useState, ChangeEvent } from "react"

import { technologies } from "@/constants/technologies"

type PropsType = {
    name: string
    tech: string
    onChangeTechStackHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const PgTechStackInput = ({ name, tech, onChangeTechStackHandler, value }: PropsType) => {
    const [selected, setSelected] = useState(false)
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(prev => !prev)
        onChangeTechStackHandler(e)
    }
    
    return (
        <>
        <label className={`cursor-pointer px-4 p-2 border-2 rounded-md border-2  ${selected ? "text-white bg-primary-600" : "border-zinc-100"}`} htmlFor={name}>
                       {technologies[tech].displayName} <input id={name} type="radio" value={value} onChange={onChangeHandler} checked={selected} name={name} />
                    </label>
        </>
    )
}

export default PgTechStackInput;