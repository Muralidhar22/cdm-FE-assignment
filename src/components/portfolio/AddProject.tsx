import NewProjectForm from "../forms/NewProjectForm";
import ProjectContainer from "./ProjectContainer";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";

const AddProject = () => {
  const { portfolioData } = usePortfolioContext() as PortfolioContextType;
  return (
    <div className="grow">
      <h1 className="font-bold">Add New Project</h1>
      <NewProjectForm />
      {portfolioData.projects.map((project) => (
        <ProjectContainer key={project.id} data={project} />
      ))}
    </div>
  );
};

export default AddProject;
