import NewProjectForm from "../forms/NewProjectForm";
import ProjectContainer from "./ProjectContainer";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";

const AddProject = () => {
  const { portfolioData } = usePortfolioContext() as PortfolioContextType;
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-5">
      <h1 className="font-bold text-xl">Add New Project</h1>
      <NewProjectForm />
      <div className="grid grid-cols-2 gap-5">
        {portfolioData.projects.map((project) => (
          <ProjectContainer key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default AddProject;
