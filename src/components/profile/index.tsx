import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { useProfileContext,ProfileContextType } from "@/contexts/Profile.context";
import { useResumeContext, ResumeContextType } from "@/contexts/Resume.context";
import { useSocialsContext, SocialsContextType } from "@/contexts/Socials.context";

type SocialContactsPropsType = {
    img: string
    alt: string
    src: string
}

const SocialContacts = ({ img, alt, src }: SocialContactsPropsType) => {
    return (
        <span className="p-2 border-2 rounded-lg border-zinc-200 grid place-content-center">
            <Link href={src}>
                <Image
                    src={`/assets/${img}`}
                    width={17}
                    height={17}
                    alt={`${alt} logo`}
                    />
            </Link>
        </span>
    )
}

const Profile = () => {
    const { profileData } = useProfileContext() as ProfileContextType
    const { resumeData } = useResumeContext() as ResumeContextType
    const { socialsData } = useSocialsContext() as SocialsContextType
    const coverBgRef = useRef<HTMLInputElement>(null)
    
    const onClickHandler = () => {
        if(coverBgRef.current){
            coverBgRef.current.click()
        }
    }
    
    return (
        <div className="grid-rows-2 relative">
            <div className="rounded-t-xl">
                <Image
                    className="w-full"
                    src="/assets/profile-default-bg.png"
                    width="500"
                    height="200"
                    alt="default profile background"
                />
                <button onClick={onClickHandler} className="absolute top-10 right-10 bg-white/10 rounded-lg py-2 pl-2 pr-3">
                    <span className="flex gap-2">
                        <Image
                            src="/assets/edit-white.svg"
                            width={24}
                            height={24}
                            alt="edit icon"
                        />
                        <span className="text-white">Edit cover</span>
                    </span>
                    <input type="file" ref={coverBgRef} className="hidden" />
                </button>
            </div>
            <div className="flex justify-between border-zinc-200 border-b-2 border-x-2 rounded-b-xl items-start px-6 pb-6">
                <span className="cursor-pointer relative -translate-y-1/2">
                    <span className="block w-24 h-24 border-2 border-zinc-100 rounded-full overflow-hidden">
                        <Image
                            src={profileData.avatar}
                            width={100}
                            height={100}
                            alt="user profile picture"
                        />
                    </span>
{         profileData.visibilityBadges &&   <div className="absolute -bottom-8 -right-6">
                            <div className="relative">
                                <Image
                                    width={80}
                                    height={80}
                                    src="/assets/badge.svg"
                                    alt="badge icon"
                                />
                            <span className="text-base text-white absolute w-full h-full grid place-content-center inset-0 -top-0.5">5</span>
                            </div>
                        </div>}
                </span>
                <div className="pt-6">
                    <div className="flex gap-1 items-center">
                        <h1 className="font-bold text-2xl">{profileData.displayName}</h1>
                         {profileData.isOpenForJob && <span className="py-0.5 px-2 text-sm text-secondary-800 bg-secondary-100 rounded font-semibold">Looking for job</span>}                       
                    </div>
                    <Link href="/edit?details=profile" className="text-sm flex gap-1 border-2 border-zinc-500 w-fit rounded-lg py-2 pl-2 pr-3">
                        <Image
                        src="/assets/edit.svg"
                        width={20}
                        height={20}
                        alt="edit icon"
                        />
                        Edit Profile</Link>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.techSkills.map((skill) => (
                            <div key={skill.id} className="bg-zinc-100 text-zinc-900  font-semibold text-xs py-2 px-3 rounded-lg">
                                {skill.displayName}
                            </div>
                        ))
                        }
                    </div>
                    <hr className="my-8"/>
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                        {socialsData.facebook 
                        && 
                        <SocialContacts 
                            alt="facebook"
                            img="facebook-logo.svg"
                            src={socialsData.facebook}
                        />
                        }
                        {socialsData.linkedin 
                        &&
                        <SocialContacts 
                            alt="linkedin"
                            img="linkedin.svg"
                            src={socialsData.linkedin}
                        /> 
                        }
                        {socialsData.instagram 
                        && 
                        <SocialContacts 
                            alt="instagram"
                            img="instagram.svg"
                            src={socialsData.instagram}
                        />
                        }
                        {socialsData.github 
                        &&
                        <SocialContacts 
                            alt="github"
                            img="github.svg"
                            src={socialsData.github}
                        /> 
                        }
                            
                        </div>
                        <div className="flex gap-2">
                            <button>
                                <span>
                                    
                            <Image 
                                src="/assets/bookmark.svg"
                                alt="bookmark icon"
                                width={24}
                                height={24}
                            />
                                </span>
                            </button>
                        <button className="bg-zinc-100 text-zinc-900 font-semibold text-xs py-2 px-3 rounded-lg">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;