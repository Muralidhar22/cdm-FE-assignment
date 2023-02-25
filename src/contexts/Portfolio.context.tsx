import { useContext, createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"
import { nanoid } from "nanoid"

import { PortfolioDataType } from "@/types/portfolio"
import { technologies } from "@/constants/technologies"

const INITIAL_PORTFOLIO_DATA : PortfolioDataType = {
    playgrounds: [{
        id: nanoid(),
        participants: [],
        title: "playground title",
        techStack: {...technologies.js},
        hasDisplayed: true
    }],
    certificates: [{id: nanoid(),issueDate: "Dec 16th, 2022", title:"Advanced theoretical Javascript", technology: {...technologies.js },type: "technology", hasDisplayed: true}],
    projects: [{
        id: nanoid(),
        imageSrc: "/assets/portfolio.png",
        techStack: [{...technologies.htmlCss},{...technologies.reactjs}],
        title: "Personal Portfolio Website",
        projectUrl: "",
        hasDisplayed: true
    },{
        id: nanoid(),
        imageSrc: "",
        techStack: [{...technologies.htmlCss},{...technologies.reactjs}],
        title: "Personal Portfolio Website 2",
        projectUrl: "",
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