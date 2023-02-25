import { useState } from "react";
import Link from "next/link";

import FormInputBox from "../FormInputBox";
import { useSocialsContext, SocialsContextType } from "@/contexts/Socials.context";
import { SocialsDataType } from "@/types/socials";
import { INITIAL_SOCIALS_DATA } from "@/constants/socials";

const SocialsForm = () => {
    const { socialsData, setSocialsData } = useSocialsContext() as SocialsContextType
    const [socialsFormData, setSocialsFormData] = useState<SocialsDataType>(socialsData)
    
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setSocialsData(socialsFormData)
    }
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name
        setSocialsFormData(prev => ({ ...prev, [key]: e.target.value }))
    }
    
    return (
        <div className="grow">
        <form onSubmit={onSubmitHandler}>
            <FormInputBox onChangeHandler={onChangeHandler} value={socialsFormData.github} label="github" placeholder="github profile URL" id="github" name="github" type="text" />
            <FormInputBox onChangeHandler={onChangeHandler} value={socialsFormData.linkedin} label="linkedin" placeholder="linkedin profile URL" id="linkedin" name="linkedin" type="text" />
            <FormInputBox onChangeHandler={onChangeHandler} value={socialsFormData.facebook} label="facebook" placeholder="facebook profile URL" id="facebook" name="facebook" type="text" />
            <FormInputBox onChangeHandler={onChangeHandler} value={socialsFormData.instagram} label="instagram" placeholder="instagram profile URL" id="instagram" name="instagram" type="text" />
            <FormInputBox onChangeHandler={onChangeHandler} value={socialsFormData.dribble} label="dribble" placeholder="dribble profile URL" id="dribble" name="dribble" type="text" />
            <FormInputBox onChangeHandler={onChangeHandler} value={socialsFormData.behance} label="behance" placeholder="behance profile URL" id="behance" name="behance" type="text" />
            <div className="flex gap-2">
            <Link href="/" className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>

            <button type="submit" className="cursor-pointer text-white bg-[#4F46E5] rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
            </div>
        </form>
        </div>
    )
}

export default SocialsForm;