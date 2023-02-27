import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";
import NewCertificateForm from "../forms/NewCertificateForm";
import CertificateContainer from "./CertificateContainer";

const AddCertificate = () => {
  const { portfolioData } = usePortfolioContext() as PortfolioContextType;

  return (
    <div className="w-1/2 mx-auto flex flex-col gap-5">
      <h1 className="font-bold text-xl">Add certificate</h1>
      <NewCertificateForm />
      <div className="grid grid-cols-2 gap-5">
        {portfolioData.certificates.map((cert) => (
          <CertificateContainer key={cert.id} data={cert} />
        ))}
      </div>
    </div>
  );
};

export default AddCertificate;
