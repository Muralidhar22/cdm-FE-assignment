import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProfileForm from "@/components/forms/ProfileForm";
import PortfolioForm from "@/components/forms/PortfolioForm";
import ResumeForm from "@/components/forms/ResumeForm";
import SocialsForm from "@/components/forms/SocialsForm";
import AddProject from "@/components/portfolio/AddProject";
import NavLink from "@/components/NavLink";
import { editNavLinks } from "@/types/edit";
import AddPlayground from "@/components/portfolio/AddPlayground";
import AddCertificate from "@/components/portfolio/AddCertificate";

const Edit = () => {
  const router = useRouter();
  const { query } = router;
  const [mainContent, setMainContent] = useState(<ProfileForm />);

  useEffect(() => {
    if (query.details === "profile") {
      setMainContent(<ProfileForm />);
    } else if (query.details === "socials") {
      setMainContent(<SocialsForm />);
    } else if (query.details === "portfolio") {
      setMainContent(<PortfolioForm />);
    } else if (query.details === "resume") {
      setMainContent(<ResumeForm />);
    } else if (query.new === "project") {
      setMainContent(<AddProject />);
    } else if (query.new === "playground") {
      setMainContent(<AddPlayground />);
    } else if (query.new === "certificate") {
      setMainContent(<AddCertificate />);
    }
  }, [router.query, query.details, query.new]);

  return (
    <div className="flex-wrap flex gap-4 items-start">
      <aside className="flex gap-4 text-base flex-col bg-zinc-50 border-2 border-zinc-100 rounded-2xl py-6 overflow-hidden">
        <nav>
          <NavLink
            selectedTab={query.details as editNavLinks}
            tabName="profile"
            href="profile"
          />
          <NavLink
            selectedTab={query.details as editNavLinks}
            tabName="socials"
            href="socials"
          />
          <NavLink
            selectedTab={query.details as editNavLinks}
            tabName="portfolio"
            href="portfolio"
          />
          <NavLink
            selectedTab={query.details as editNavLinks}
            tabName="resume"
            href="resume"
          />
        </nav>
      </aside>
      {mainContent}
    </div>
  );
};

export default Edit;
