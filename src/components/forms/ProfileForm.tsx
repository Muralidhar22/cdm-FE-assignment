import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import FormInputBox from "@/components/FormInputBox";
import ToggleSwitch from "@/components/ToggleSwitch";
import { useProfileContext, ProfileContextType } from "@/contexts/Profile.context";

const ProfileForm = () => {
    const { profileData, setProfileData } = useProfileContext() as ProfileContextType
    const [profileFormData, setProfileFormData] = useState(profileData)
    const inputFileRef = useRef<HTMLInputElement>(null)
    
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setProfileData(profileFormData)
    }
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, value?: boolean | string) => {
        const key = e.target.name
        value = value !== undefined ? value : e.target.value
        setProfileFormData(prev => ({ ...prev, [key]: value }))
    }
    
    const removeProfilePicture = () => {
        setProfileFormData(prev => ({ ...prev, avatar: "" }))
    }
    
    const uploadProfilePicture = () => {
        if(inputFileRef.current) {
            inputFileRef.current.click()
        }
    }
    
    return (
        <div className="grow">
        <div className="flex gap-4 items-center">
            <Image 
                src={profileData.avatar}
                width={72}
                height={72}
                alt="profile picture"
            />
            <button onClick={uploadProfilePicture} className="bg-[#4F46E5] text-white p-2.5 rounded-lg text-sm">Upload new picture</button>
            <input id="file-input" ref={inputFileRef} type="file" className="hidden" />
            <button className="text-sm font-semibold p-2.5 rounded-lg bg-zinc-100" onClick={removeProfilePicture}>Delete</button>
            <div className="flex items-center gap-1">
                        <span className="text-zinc-500">Looking for job</span>
                  <ToggleSwitch 
                        name="visibilityFollowers"
                        onChangeHandler={onChangeHandler}
                        data={profileFormData.visibilityFollowers}
                    />
                </div>
        </div>
        <form onSubmit={onSubmitHandler}>
            <FormInputBox
                value={profileFormData.displayName}
                type="text"
                name="displayName"
                id="displayName"
                label="display name"
                onChangeHandler={onChangeHandler}
                placeholder="enter your full name"
                note="Name entered above will be used for all issued certificates"
            />
            <label htmlFor="about" className="block font-semibold text-sm">About</label>
            <textarea name="about" id="about" className="block w-full h-24 resize-none px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-zinc-900" cols={50} rows={10}></textarea>
            <FormInputBox
                value={profileFormData.profession}
                type="text"
                name="profession"
                id="profession"
                label="profession"
                onChangeHandler={onChangeHandler}
                placeholder="Enter your current profession"
            />
            <FormInputBox
                value={profileFormData.dob}
                type="date"
                name="dob"
                id="dob"
                label="date of birth"
                onChangeHandler={onChangeHandler}
                placeholder="DD/MM/YYYY"
            />
            <label htmlFor="gender" className="block font-semibold text-sm">Gender</label>
            <select name="gender" value={profileFormData.gender ?? ""} id="gender" className="w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-zinc-900 cursor-pointer" placeholder="what is your gender?">
                <option value="" disabled>What is your gender?</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Other" >Other</option>
            </select>
            <h2 className="font-bold text-xl">Section Visibility</h2>
            <span className="text-zinc-500">Select which sections and content should show on your profile page.</span>
            <section className="bg-zinc-50 rounded-2xl p-6 flex flex-col gap-3">
                <div  className="flex justify-between">
                    <div>
                    <h3 className="text-base font-semibold">Followers and following</h3>
                    <span className="text-zinc-500">Shows your followers and the users you follow on codedamn</span>
                    </div>
                  <ToggleSwitch 
                        name="visibilityFollowers"
                        onChangeHandler={onChangeHandler}
                        data={profileFormData.visibilityFollowers}
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                    <h3 className="text-base font-semibold">XP</h3>
                    <span className="text-zinc-500">Shows the XP you have earned</span>
                    </div>
                  <ToggleSwitch
                    name="visibilityXP"
                    onChangeHandler={onChangeHandler}
                  data={profileFormData.visibilityXP}/>
                </div>
                <div  className="flex justify-between">
                    <div>
                    <h3 className="text-base font-semibold">Achievement badges</h3>
                    <span className="text-zinc-500">Shows your relative percentile and proficiency</span>
                    </div>
                  <ToggleSwitch 
                    name="visibilityBadges"
                    onChangeHandler={onChangeHandler}
                  data={profileFormData.visibilityBadges}/>
                </div>
            </section>
            
        <div className="flex gap-2">
            <Link href="/" className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>

            <button type="submit" className="cursor-pointer text-white bg-[#4F46E5] rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
            </div>
        </form>
        </div>
    )
}

export default ProfileForm;