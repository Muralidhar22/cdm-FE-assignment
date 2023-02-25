import Image from "next/image";

import { useProfileContext, ProfileContextType } from "@/contexts/Profile.context";
import { technologies } from "@/constants/technologies";
import { TechType } from "@/types/technologies";


const PlaygroundContainer = ({ title, techStack }: { title: string, techStack: TechType }) => {
    const { profileData } = useProfileContext() as ProfileContextType
    return ( 
        <div className="border-2 border-zinc-100 bg-zinc-50 flex rounded-lg p-4 items-start gap-2">
              <Image
                src={techStack.imageSrc}
                alt={techStack.displayName}
                width={45}
                height={45}
            />
            <div className="flex justify-between flex-col">
                <h3>{title}</h3>
                <div>
                    <span>
                        {techStack.displayName}&nbsp;
                    </span>
                    <span></span>
                    <span>&nbsp;1 min ago</span>
                </div>
                <div>
                    <span className="flex gap-2">
                        <span className="flex">
                        <Image
                            className="relative z-0 shrink-0 -mr-2"
                            src="/assets/random-avatar.svg"
                            width={24}
                            height={24}
                            alt="playground participant avatar"
                        />
                        <Image
                            className="relative z-10 shrink-0"
                            src={profileData.avatar}
                            width={24}
                            height={24}
                            alt="plaground participant avatar"
                        />
                        </span>
                        <span>Shared with&nbsp; 
                            <span>
                            Adam, {profileData.displayName}.. +7 more
                            </span>
                            </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PlaygroundContainer;