import Image from "next/image";

export const ProfilePicture = () => {
  const img = "http://localhost:3001/profilepic.jpg";
  return (
    <div className="flex justify-end p-[40px]">
      <Image
        className="borderOval"
        src={img}
        width={300}
        height={300}
        alt="asd"
      />
    </div>
  );
};
