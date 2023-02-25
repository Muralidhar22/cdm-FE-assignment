import Image from "next/image";

import { useProfileContext, ProfileContextType } from "@/contexts/Profile.context";
import { technologyIcons } from "@/constants/technologyIcons";
import Technology from "@/types/technologies";

const PlaygroundContainer = ({ title, technology }: { title: string, technology: Technology }) => {
    const { profileData } = useProfileContext() as ProfileContextType
    return ( 
        <div className="border-2 border-zinc-100 bg-zinc-50 flex rounded-lg p-4 items-start gap-2">
              <Image
                src={technologyIcons[technology]}
                alt={technology}
                width={45}
                height={45}
            />
            <div className="flex justify-between flex-col">
                <h3>{title}</h3>
                <div>
                    <span>
                        {technology}&nbsp;
                    </span>
                    <span></span>
                    <span>&nbsp;1 min ago</span>
                </div>
                <div>
                    <span className="flex gap-2">
                        <span className="flex">
                        <Image
                            className="relative z-0"
                            src="/assets/random-avatar.svg"
                            width={24}
                            height={24}
                            alt="playground participant avatar"
                        />
                        <Image
                            className="relative z-10"
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