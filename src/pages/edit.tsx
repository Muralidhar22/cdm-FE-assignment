import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProfileForm from "@/components/forms/ProfileForm";
import PortfolioForm from "@/components/forms/PortfolioForm";
import ResumeForm from "@/components/forms/ResumeForm";
import SocialsForm from "@/components/forms/SocialsForm";
import AddProject from "@/components/portfolio/AddProject";
import NavLink from "@/components/NavLink";
import { editNavLinks } from "@/types/edit";


const edit = () => {
    const router = useRouter()
    const { query } = router
    const [mainContent, setMainContent] = useState(<ProfileForm />)
    
    useEffect(() => {
        console.log(query.new, query.details)
        if(query.details === "profile") {
             setMainContent(<ProfileForm />)
        } else if (query.details === "socials") {
            setMainContent(<SocialsForm />)
        } else if (query.details === "portfolio") {
            setMainContent(<PortfolioForm />)
        } else if (query.details === "resume") {
            setMainContent(<ResumeForm />)
        } else if (query.new === "project")  {
            setMainContent(<AddProject />)
        }
         else if (query.details === "portfolio" && query.new === "playground")  {
            
        }
         else if (query.details === "portfolio" && query.new === "certificate")  {
            
        }
    },[router, query.details])
    

    return (
        <div className="flex-wrap flex gap-4 items-start">
            <aside className="flex gap-4 text-base flex-col bg-zinc-50 border-2 border-zinc-100 rounded-2xl py-6 overflow-hidden">
                <NavLink selectedTab={query.details as editNavLinks} tabName="profile" href="profile"/>
                <NavLink selectedTab={query.details as editNavLinks} tabName="socials" href="socials"/>
                <NavLink selectedTab={query.details as editNavLinks} tabName="portfolio" href="portfolio"/>
                <NavLink selectedTab={query.details as editNavLinks} tabName="resume" href="resume"/>
            </aside>
            {mainContent}
        </div>
    )
}

export default edit;