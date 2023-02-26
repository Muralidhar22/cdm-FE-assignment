
import NewPlaygroundForm from "../forms/NewPlaygroundForm"
import PlaygroundContainer from "./PlaygroundContainer"
import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context"

const AddPlayground = () => {
    const { portfolioData } = usePortfolioContext() as PortfolioContextType
    
    return(
                <div className="grow">

                    <NewPlaygroundForm />
                
                {
                    portfolioData.playgrounds.map((pg) => (
                        <PlaygroundContainer 
                            key={pg.id}
                            data={pg}
                        />
                    ))
                }
                </div>

    )
}

export default AddPlayground