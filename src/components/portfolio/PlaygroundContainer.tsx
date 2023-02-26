import Image from "next/image";

import { useProfileContext, ProfileContextType } from "@/contexts/Profile.context";
import { formatDistanceToNow } from "date-fns";
import { PlaygroundType, PortfolioDataType } from "@/types/portfolio";
import { Dispatch, SetStateAction } from "react";


type PropsType = {
    isOption?: boolean
    setData?: Dispatch<SetStateAction<PortfolioDataType>>
    data: PlaygroundType
}

const PlaygroundLayout = ({ data, isOption }: { data: PlaygroundType, isOption?: boolean }) => {
    const { profileData } = useProfileContext() as ProfileContextType
    
    return (
        <div className={`${!isOption && "border-2 border-zinc-100 bg-zinc-50 rounded-lg"} flex p-4 items-start gap-2`}>
              <Image
                src={data.techStack.imageSrc}
                alt={data.techStack.displayName}
                width={45}
                height={45}
            />
            <div className="flex justify-between flex-col">
                <h3>{data.title}</h3>
                <div>
                    <span>
                        {data.techStack.displayName}&nbsp;
                    </span>
                    <span></span>
                    <span>&nbsp;{formatDistanceToNow(data.createDateTime,{ addSuffix: true })}</span>
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

const PlaygroundContainer = ({ data, isOption, setData }: PropsType) => {

    const onClickHandler = () => {
        if(setData) {     
            setData(prev => (
                {
                    ...prev,
                    playgrounds: prev.playgrounds.map((pg) => (
                        pg.id === data.id ?
                        { ...pg, hasDisplayed: !pg.hasDisplayed }
                        : pg
                        ))
                }
            ))
        }
    }
    
    if(isOption) {
        return (
            <div onClick={onClickHandler} role="option" className={`border-2 rounded-lg cursor-pointer p-4 ${data.hasDisplayed ? "border-primary-600 bg-primary-50" : "border-zinc-100 bg-zinc-50"}`}>
            <PlaygroundLayout data={data} isOption={isOption} />
                
            </div>
        )
    }
    
    return (
        <PlaygroundLayout data={data} isOption={isOption} />
    )
}

export default PlaygroundContainer;