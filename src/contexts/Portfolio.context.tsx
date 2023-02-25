import { useContext, createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"
import { nanoid } from "nanoid"

import { PortfolioDataType } from "@/types/portfolio"

const INITIAL_PORTFOLIO_DATA : PortfolioDataType = {
    playgrounds: [{
        id: nanoid(),
        participants: [],
        title: "playground title",
        technology: "JavaScript",
        hasDisplayed: true
    }],
    certificates: [{id: nanoid(),issueDate: "Dec 16th, 2022", title:"Advanced theoretical Javascript", technology: "JavaScript",type: "technology", hasDisplayed: true}],
    projects: [{
        id: nanoid(),
        imageSrc: "/assets/portfolio.png",
        technologies: ["ReactJs","HTML/CSS"],
        title: "Personal Portfolio Website",
        hasDisplayed: true
    },{
        id: nanoid(),
        imageSrc: "",
        technologies: ["ReactJs","HTML/CSS"],
        title: "Personal Portfolio Website 2",
        hasDisplayed: true
    }],
    stats: {
     longestStreak: 2,
     league: 'Novice',
     karma: 120,
     experience: 1200
    }
}

export type PortfolioContextType = {
    portfolioData: PortfolioDataType
    setPortfolioData: Dispatch<SetStateAction<PortfolioDataType>>
}

type PortfolioProviderPropsType = {
    children: ReactNode
}

const PortfolioContext = createContext<PortfolioContextType | null>(null)

export const PortfolioProvider = ({ children }: PortfolioProviderPropsType) => {
    const [portfolioData, setPortfolioData] = useState( INITIAL_PORTFOLIO_DATA)
    const value = { portfolioData, setPortfolioData }
    return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}

export const usePortfolioContext = () => useContext(PortfolioContext)