import Image from "next/image"
import InstagramIcon from '../../../public/instagramIcon.svg'
import LinkdinIcon from '../../../public/linkdinIcon.svg'
import EmailIcon from '../../../public/emailIcon.svg'

export const Footer = () =>{
    return(
        <div className="flex justify-center flex-col items-center gap-midium">
            <div className="flex justify-center gap-midium">
                <Image className="cursor-pointer" src={InstagramIcon} alt="Instagram"/>
                <Image className="cursor-pointer" src={LinkdinIcon} alt="Linkedin"/>
                <Image className="cursor-pointer" src={EmailIcon} alt="Email"/>
            </div>

            Some Name
        </div>
    )
}