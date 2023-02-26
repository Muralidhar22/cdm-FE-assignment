import Link from "next/link";
import { useEffect, useState } from "react";

import FormInputBox from "../FormInputBox";
import FormSaveButton from "../FormSaveButton";
import ProjectContainer from "../portfolio/ProjectContainer";
import PlaygroundContainer from "../portfolio/PlaygroundContainer";
import CertificateContainer from "../portfolio/CertificateContainer";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";
import UnSavedDialogBox from "../UnSavedDialogBox";

import toast from "react-hot-toast";

const PortfolioForm = () => {
  const { portfolioData, setPortfolioData } =
    usePortfolioContext() as PortfolioContextType;
  const [portfolioFormData, setPortfolioFormData] = useState(portfolioData);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const isChanged =
      JSON.stringify(portfolioFormData) !== JSON.stringify(portfolioData);
    setIsFormChanged(isChanged);
  }, [portfolioFormData, portfolioData]);

  const onSubmitHandler = (e: React.FormEvent) => {
    console.log("adsasdd");
    e.preventDefault();
    setPortfolioData(portfolioFormData);
    setIsFormChanged(false);
    toast.success("Saved Successfully!");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? e.target.valueAsNumber : null;
    setPortfolioFormData((prev) => ({
      ...prev,
      stats: { ...prev.stats, [e.target.name]: value },
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmitHandler}>
        <FormInputBox
          value={portfolioFormData.stats.longestStreak ?? ""}
          required={true}
          name="longestStreak"
          id="longestStreak"
          label="your streak"
          onChangeHandler={onChangeHandler}
          type="number"
          placeholder="Enter your streak number"
        />
        <FormInputBox
          value={portfolioFormData.stats.karma ?? ""}
          required={true}
          name="karma"
          id="karma"
          label="Your karma"
          onChangeHandler={onChangeHandler}
          type="number"
          placeholder="Enter your karma number"
        />
        <FormInputBox
          value={portfolioFormData.stats.experience ?? ""}
          required={true}
          name="experience"
          id="experience"
          label="your experience"
          onChangeHandler={onChangeHandler}
          type="number"
          placeholder="Enter your experience number"
        />

        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Projects</h2>
            <Link
              href="/edit?new=project"
              shallow
              className="font-semibold text-primary-600"
            >
              Add New Project
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {portfolioFormData.projects.map((project) => (
              <ProjectContainer
                key={project.id}
                data={project}
                isOption={true}
                setData={setPortfolioFormData}
              />
            ))}
          </div>
        </section>
        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Playgrounds</h2>
            <Link
              href="/edit?new=playground"
              shallow
              className="font-semibold text-primary-600"
            >
              Create New Playground
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {portfolioFormData.playgrounds.map((pg) => (
              <PlaygroundContainer
                key={pg.id}
                data={pg}
                isOption={true}
                setData={setPortfolioFormData}
              />
            ))}
          </div>
        </section>
        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Certificates</h2>
            <Link
              href="/edit?new=certificate"
              shallow
              className="font-semibold text-primary-600"
            >
              Add new certificate
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {portfolioFormData.certificates.map((cert) => (
              <CertificateContainer
                key={cert.id}
                data={cert}
                setData={setPortfolioFormData}
                isOption={true}
              />
            ))}
          </div>
        </section>

        <FormSaveButton isFormChanged={isFormChanged} />
        {isFormChanged && <UnSavedDialogBox />}
      </form>
    </div>
  );
};

export default PortfolioForm;
