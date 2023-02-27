import NewPlaygroundForm from "../forms/NewPlaygroundForm";
import PlaygroundContainer from "./PlaygroundContainer";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";

const AddPlayground = () => {
  const { portfolioData } = usePortfolioContext() as PortfolioContextType;

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-5">
      <h1 className="font-bold text-xl">Add playground</h1>
      <NewPlaygroundForm />
      <div className="grid grid-cols-2 gap-5">
        {portfolioData.playgrounds.map((pg) => (
          <PlaygroundContainer key={pg.id} data={pg} />
        ))}
      </div>
    </div>
  );
};

export default AddPlayground;
