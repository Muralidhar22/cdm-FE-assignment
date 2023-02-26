import ProjectContainer from "./ProjectContainer"

import { usePortfolioContext, PortfolioContextType } from "@/contexts/Portfolio.context"
import NewCertificateForm from "../forms/NewCertificateForm"
import CertificateContainer from "./CertificateContainer"

const AddCertificate = () => {
    const { portfolioData } = usePortfolioContext() as PortfolioContextType
    
    return(
                <div className="grow">
                    <NewCertificateForm />
                
                {
                    portfolioData.certificates.map((cert) => (
                        <CertificateContainer 
                            key={cert.id}
                            data={cert}
                        />
                    ))
                }
                </div>

    )
}

export default AddCertificate;