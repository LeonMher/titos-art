import Image, { StaticImageData } from "next/image";
import { oddNumber } from "@/ultils/oddNumber";

type TProject = {
  project: {
    id: number;
    name: string;
    description: string;
    image: StaticImageData;
  };
};
export const ProjectLayout = (props: TProject) => {
  const { project } = props;
  return (
    <div className="flex flex-col gap-[20px] border border-indigo-200 p-[20px] rounded-md md:w-[1000px] md:h-[400px] md:flex-row">
      {!oddNumber(project.id) ? (
        <>
          <div
            data-aos="fade-right"
            className="relative w-[400px] md:flex md:flex-col md:items-center md:flex-1"
          >
            <Image
              src={project.image}
              alt="Grafiti Art"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center flex-1 image-wrapper relative md:flex-1">
            <div className="text-3xl">{project.name}</div>
            <div className="text-gray-600 w-[400px]">{project.description}</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center flex-1 gap-midium">
            <div className="text-3xl">{project.name}</div>
            <div className="text-gray-600 w-[400px]">{project.description}</div>
          </div>
          <div
            data-aos="fade-right"
            className="flex flex-col items-center justify-center flex-1 image-wrapper relative"
          >
            <Image
              src={project.image}
              alt="Grafiti Art"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};
