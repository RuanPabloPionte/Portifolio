import Image from "next/image";
import { GoBroadcast } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import ButtonGrey from "./ButtonGrey";

// Definindo um tipo para representar uma tecnologia com nome e cor
type Technology = {
  name: string;
  color: string;
};

// Definindo um tipo para as props do componente ProjectCard
type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  technologies: Technology[];
  demoLink: string;
  codeLink: string;
};

// Componente para representar um projeto individual
function ProjectCard({
  imageSrc,
  title,
  description,
  technologies,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-2 place-items-center p-4">
      <div className="m-4 md:h-96">
        <Image
          className="rounded-md md:h-80 object-cover "
          src={imageSrc}
          alt=""
          height={400}
          width={600}
        />
      </div>
      <div className="w-full">
        <div className="text-center">
          <h3 className="text-xl lg:text-4xl lg:my-4 font-semibold m-2 tracking-wide">
            {title}
          </h3>
          <p className="text-xl lg:text-3xl">{description}</p>
        </div>
        <div className="grid grid-cols- place-items-center m-5">
          <div className="flex min-w-[50%] justify-between gap-5 text-xl font-semibold ">
            {technologies.map((tech, index) => (
              <span key={index} className={`${tech.color}`}>
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex min-w-[50%] justify-between gap-5 text-xl">
            <a href={demoLink} target="_blank" className="flex gap-2">
              <ButtonGrey>
                <span className="text-md font-semibold">Demo</span>
                <GoBroadcast />
              </ButtonGrey>
            </a>

            <ButtonGrey>
              <a href={codeLink} target="_blank" className="flex gap-2">
                <span className="text-md font-semibold ">Code</span>
                <BsGithub />
              </a>
            </ButtonGrey>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
