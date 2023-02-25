import { TechType } from "./technologies"

export type ProjectType = {
    id: string
    imageSrc: string
    title: string
    techStack: TechType[]
    projectUrl: string
    hasDisplayed: boolean
}

export type PlaygroundType = {
    id: string
    title: string
    techStack: TechType
    participants: string[]
    hasDisplayed: boolean
}

export type CertificateType = {
    id: string,
    technology?: TechType
    title: string
    type: 'technology' | 'achievement' 
    issueDate: string
    hasDisplayed: boolean
}

export type StatsType = {
    longestStreak: number | null
    league: 'Novice' | 'Pro' | 'Expert' | 'Intermediate'
    karma: number | null
    experience: number | null
}

export type PortfolioDataType = {
   playgrounds: PlaygroundType[]
   certificates: CertificateType[]
   projects: ProjectType[]
   stats: StatsType
}