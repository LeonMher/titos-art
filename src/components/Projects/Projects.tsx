import { ProjectLayout } from "../Projects/ProjecLayout";
import GrafitiArtWork from '../../../public/grafitiArt.jpg'
import InteriorGrafiti from '../../../public/interiorGrafiti.jpg'
import RealisticGrafiti from '../../../public/realisticGrafiti.jpg'
import { StaticImageData } from "next/image";


interface TProject  {
    id: number,
    name: string,
    description: string,
    image: StaticImageData
}

export const Projects = () =>{

    const projects: TProject[] = [
        {
        id: 1,    
        name: "Urban Mosaic",
        description: 
        "The graffiti on the wall is a vibrant display of artistic expression,featuring bold colors and intricate details that captivate the viewer's attention.", 
        image: GrafitiArtWork
        },
        
        {
        id: 2,
        name: "Interior Grafiti",
        description: 
        "Drawing inspiration from urban landscapes and street art culture, my work blends bold shapes and intricate details to create immersive environments that captivate the eye", 
        image: InteriorGrafiti
        },

        {
            id: 3,
            name: "Heartifi",
            description: 
            "A heart painted on a wall speaks volumes without saying a word. It symbolizes love, passion, and the human connection. In the midst of urban chaos, this simple yet powerful symbol stands out as a beacon of hope and warmth", 
            image: RealisticGrafiti
            }
    ]

    
    return(
        <div className="flex justify-center items-center flex-col gap-midium">
            <p className="text-4xl">Projects</p>
            <div className="w-[100px] h-[5px] bg-yellow-400"></div>
            {projects.map((project)=>{
            return <ProjectLayout project={project}/>

            })}
            
        </div>
    )
}