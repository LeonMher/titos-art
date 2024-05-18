import { Navigation } from "@/components/nav/Navigation"
import AboutMePic from '../../../public/aboutMePic.jpg'
import Image from "next/image"


export default function AboutMe (){
    return(
        <div className="p-[20px] flex flex-col items-center gap-large h-[100vh]">
        <Navigation />
        <div className='flex flex-col justify-center items-center gap-large md:flex-row'>
            

            <div>
                <Image className="borderOval" src={AboutMePic} alt="About Me" width={300} height={300}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-midium">
                <h1 className="text-3xl">About Me</h1>
                <p className="w-[350px] text-gray-600">As a graffiti artist, I am driven by a deep passion for painting. I find joy in exploring different mediums and 
                    techniques to create unique and vibrant works of art. My style is characterized by bold lines, 
                    vibrant colors, and a focus on composition. I believe that art should evoke emotions and bring 
                    people together, which is why I strive to create paintings that resonate with others.</p>
            </div>
            </div>
        </div>
    )
}