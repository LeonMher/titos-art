"use client";

import useAboutMe from "../../api/useAboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Introduction() {
  const { data, isLoading, isError, error } = useAboutMe();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const intro = data?.intro;
  const experience = data?.experience;
  return (
    <div className="flex items-start justify-center flex-col w-[300px] gap-large">
      <p className="text-3xl text-black-100">{intro}</p>
      <p className="text-gray-600">{experience}</p>
      <div className="flex gap-midium" data-aos="fade-right">
        <button className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded p-[10px]">
          Projects
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded p-[10px]"
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
}
