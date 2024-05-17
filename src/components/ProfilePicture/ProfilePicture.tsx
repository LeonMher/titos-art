import ProfilePic from "../../../public/profilePicture.jpg";
import Image from "next/image";

export const ProfilePicture = () => {
  return (
    <div className="flex justify-end p-[40px]">
      <Image
        className="borderOval"
        src={ProfilePic}
        width={300}
        height={300}
        alt="asd"
      />
    </div>
  );
};
