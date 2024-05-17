import { Navigation } from "../components/nav/Navigation";
import { ProfilePicture } from "../components/ProfilePicture/ProfilePicture";
import { Introduction } from "../components/Introduction/Introduction";
import { Projects } from '../components/Projects/Projects'
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="p-[20px]">
      <Navigation />
      <div className="flex justify-center gap-extraLarge">
        <Introduction />
        <ProfilePicture />
      </div>
      <div className="flex flex-col gap-extraLarge">
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
