import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProfileForm from "@/components/forms/ProfileForm";
import PortfolioForm from "@/components/forms/PortfolioForm";
import ResumeForm from "@/components/forms/ResumeForm";
import SocialsForm from "@/components/forms/SocialsForm";
import EditNav from "@/components/EditNav";
import { editNavLinks } from "@/types/edit";


const edit = () => {
    const router = useRouter()
    const { query } = router
    const [mainContent, setMainContent] = useState(<ProfileForm />)
    
    useEffect(() => {
        if(query.details === "profile") {
             setMainContent(<ProfileForm />)
        } else if (query.details === "socials") {
            setMainContent(<SocialsForm />)
        } else if (query.details === "portfolio") {
            setMainContent(<PortfolioForm />)
        } else if (query.details === "resume") {
            setMainContent(<ResumeForm />)
        }   
    },[router])
    

    return (
        <div className="flex-wrap flex gap-4 items-start">
            <div className="flex gap-4 text-base flex-col bg-zinc-50 border-2 border-zinc-100 rounded-2xl py-9 overflow-hidden">
                {query.details && <EditNav selectedTab={query.details as editNavLinks} tabName="profile" href="profile"/>}
                {query.details && <EditNav selectedTab={query.details as editNavLinks} tabName="socials" href="socials"/>}
                {query.details && <EditNav selectedTab={query.details as editNavLinks} tabName="portfolio" href="portfolio"/>}
                {query.details && <EditNav selectedTab={query.details as editNavLinks} tabName="resume" href="resume"/>}
            </div>
            {mainContent}
        </div>
    )
}

export default edit;