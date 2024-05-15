import ProfilePic from "../../../public/profilePicture.jpg";
import Image from "next/image";

export const ProfilePicture = () => {
  return (
    <div className="border flex justify-end p-[40px]">
      <Image
        className="border"
        src={ProfilePic}
        width={300}
        height={300}
        alt="asd"
      />
    </div>
  );
};
