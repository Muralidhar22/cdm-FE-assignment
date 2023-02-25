import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "@/components/SearchBar";
import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context";
import { useProfileContext, ProfileContextType } from "@/contexts/Profile.context";

type PropsType = {
    children: ReactNode
}

const Layout = ({ children }: PropsType) => {
    const { portfolioData } = usePortfolioContext() as PortfolioContextType
    const { profileData } = useProfileContext() as ProfileContextType
    return(
        <>
            <nav className="flex items-center justify-between">
                <header className="font-bold text-2xl">
                    <Link href="/">codedamn</Link>
                </header>
                <div className="flex items-center gap-6">
                <SearchBar />
                <span className="cursor-pointer">
                    <Image 
                        src="/assets/Bell.png"
                        alt="Notification Bell"
                        width={24}
                        height={24}
                    />  
                </span>
                <span className="flex gap-0.25 items-center">
                    <Image
                        src="/assets/Lightning.png"
                        alt="lightning icon"
                        width={42}
                        height={42}
                    />
                    <span className="font-extrabold text-zinc-500">{portfolioData.stats.longestStreak}</span>
                </span>
                <span className="cursor-pointer relative">
                    <span className="block w-9 h-9 rounded-full overflow-hidden">    
                        <Image
                            src={profileData.avatar}
                            width={42}
                            height={42}
                            alt="user profile picture"
                        />
                    </span>

                    <div className="absolute -top-3 -right-3">
                        <div className="relative">
                            <Image
                                width={42}
                                height={42}
                                src="/assets/badge.svg"
                                alt="badge icon"
                            />
                          <span className="text-xs text-white absolute w-full h-full grid place-content-center inset-0">5</span>
                        </div>
                    </div>
                </span>
                    
                </div>
            </nav>
            {children}
        </>
    )
}

export default Layout;