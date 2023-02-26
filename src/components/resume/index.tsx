import Image from "next/image";

import { useResumeContext, ResumeContextType } from "@/contexts/Resume.context";

const Resume = () => {
  const { resumeData } = useResumeContext() as ResumeContextType;
  return (
    <div>
      <section className="mt-10">
        <h2 className="font-bold text-2xl text-center mb-6">About me</h2>
        <div className="bg-zinc-50 border-2 border-zinc-100 rounded-2xl p-6 font-medium text-base">
          {resumeData.description}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="font-bold text-2xl text-center mb-6">Work experience</h2>
        {resumeData.workExperience.map((exp) => (
          <div
            key={exp.title}
            className="bg-zinc-50 border-2 border-zinc-100 rounded-2xl p-6 font-medium text-base flex gap-5 items-start"
          >
            <Image
              width={34}
              height={34}
              src={exp.companyLogo ?? "/assets/company.svg"}
              alt={"company" + "logo"}
            />
            <div className="grow">
              <h3 className="font-bold text-xl">{exp.title}</h3>
              <div className="flex justify-between w-full mt-1 mb-6">
                <span className="flex gap-1 text-base item-center font-normal">
                  <span>{exp.location}</span>
                  <span>&bull;</span>
                  <span>{exp.company + " " + "Inc."}</span>
                </span>
                <span>
                  {exp.duration.from.month}&nbsp;{exp.duration.from.year} -{" "}
                  {exp.duration.isPresent ? (
                    "Present"
                  ) : (
                    <span>
                      {exp.duration.to?.month}&nbsp;{exp.duration.from.year}
                    </span>
                  )}
                </span>
              </div>
              <p className="text-base font-normal text-zinc-500 mb-3">
                {exp.jobDescription}
              </p>
              {exp.jobResponsibilities && (
                <>
                  <h3 className="font-semibold text-base mb-2">
                    Job Responsibilities:
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {exp.jobResponsibilities.map((resp) => (
                      <span className="flex gap-5" key={resp}>
                        <Image
                          src="/assets/bullet-point-icon.svg"
                          alt="bullet point icon"
                          width={8}
                          height={8}
                        />
                        <li className="text-base font-normal text-zinc-500">
                          {resp}
                        </li>
                      </span>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {}
          </div>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="font-bold text-2xl mb-6">Tech Skills</h2>
        <div className="flex flex-wrap gap-5">
          {resumeData.techSkills.map((skill) => (
            <div
              key={skill.id}
              className="text-base bg-zinc-100 text-zinc-900  font-semibold py-2 px-3 rounded-lg flex gap-2 items-center"
            >
              <Image
                className="shrink-0"
                width={20}
                height={20}
                alt={skill.displayName}
                src={skill.imageSrc}
              />
              <span>{skill.displayName}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="font-bold text-2xl mb-6">Interests</h2>
        <div className="flex flex-wrap gap-5">
          {resumeData.interests.map((interest) => (
            <div
              key={interest.id}
              className="text-base bg-zinc-100 text-zinc-900  font-semibold py-2 px-3 rounded-lg"
            >
              {interest.name}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="font-bold text-2xl mb-6">Languages</h2>
        <div className="flex flex-wrap gap-5">
          {resumeData.languages.map((data) => (
            <div
              key={data.id}
              className="text-base bg-zinc-100 text-zinc-900 font-semibold py-2 px-3 rounded-lg flex gap-1"
            >
              <Image
                width={20}
                height={20}
                alt={data.language + "flag"}
                src={data?.flagPicture ?? ""}
              />
              <span>{data.language}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
