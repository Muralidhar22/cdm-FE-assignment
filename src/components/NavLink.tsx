import Image from "next/image";
import { editNavLinks } from "@/types/edit";
import Link from "next/link";

type NavLinkPropsType = {
  selectedTab?: editNavLinks;
  tabName?: editNavLinks;
  href?: string;
};

const NavLink = ({ selectedTab, tabName, href }: NavLinkPropsType) => {
  return (
    <span className="flex gap-2 px-6 relative">
      {selectedTab === tabName && (
        <div className="h-100 absolute -left-1 bottom-0 top-0 rounded bg-slate-900 w-2"></div>
      )}
      {selectedTab === tabName ? (
        <Image
          src="/assets/form-icon.svg"
          width={20}
          height={20}
          alt="circular icon"
        />
      ) : (
        <Image
          src="/assets/form-inactive-icon.svg"
          width={20}
          height={20}
          alt="circular icon"
        />
      )}
      <Link
        shallow
        className={`cursor-pointer font-semibold pr-20 py-3 ${
          selectedTab === tabName ? "text-black" : "text-zinc-400"
        }`}
        href={`/edit?details=${href}`}
      >
        {tabName ? tabName.charAt(0).toUpperCase() + tabName?.slice(1) : null}
      </Link>
    </span>
  );
};

export default NavLink;
