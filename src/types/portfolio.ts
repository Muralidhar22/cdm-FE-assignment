import Technology from "./technologies"

export type ProjectType = {
    id: string
    imageSrc: string
    title: string
    technologies: Technology[]
    hasDisplayed: boolean
}

export type PlaygroundType = {
    id: string
    title: string
    technology: Technology
    participants: string[]
    hasDisplayed: boolean
}

export type CertificateType = {
    id: string,
    technology?: Technology
    title: string
    type: 'technology' | 'achievement' 
    issueDate: string
    hasDisplayed: boolean
}

export type StatsType = {
    longestStreak: number
    league: 'Novice' | 'Pro' | 'Expert' | 'Intermediate'
    karma: number
    experience: number
}

export type PortfolioDataType = {
   playgrounds: PlaygroundType[]
   certificates: CertificateType[]
   projects: ProjectType[]
   stats: StatsType
}