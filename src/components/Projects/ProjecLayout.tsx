import Image, { StaticImageData } from "next/image"
import { oddNumber } from "@/ultils/oddNumber"

type TProject = { 
    
    project: {
    id: number,name: string,
    description: string,
    image: StaticImageData
    }

}
export const ProjectLayout = (props: TProject) =>{
    const {project} = props
    console.log(project, ' project log')
    return(
        <div className="w-[1000px] h-[400px] flex gap-[20px] border border-indigo-200 rounded-md">
            {oddNumber(project.id) ? (
                <>
                <div className="flex flex-col items-center justify-center flex-1 image-wrapper relative">
                <Image src={project.image} alt='Grafiti Art' fill className="object-cover"/>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-midium">
            <div className="text-3xl">{project.name}</div>
            <div className="text-gray-600 w-[400px]">{project.description}</div>
        </div>
        </>
            ): (
                <>
               
            <div className="flex flex-col items-center justify-center flex-1 gap-midium">
            <div className="text-3xl">{project.name}</div>
            <div className="text-gray-600 w-[400px]">{project.description}</div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 image-wrapper relative">
                <Image src={project.image} alt='Grafiti Art' fill className="object-cover"/>
                </div>
        </>
            )}
            

            
        </div>
    )
}