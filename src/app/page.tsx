'use client'
import { Navigation } from "../components/nav/Navigation";
import { ProfilePicture } from "../components/ProfilePicture/ProfilePicture";
import { Introduction } from "../components/Introduction/Introduction";
import { Projects } from '../components/Projects/Projects'
import { Footer } from "@/components/footer/Footer";
import { QueryClientProvider, QueryClient } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <div className="p-[20px] flex flex-col items-center">
      <Navigation />
      <div className="flex justify-between flex-col items-center flex-col-reverse md:flex-row">
        <Introduction />
        <ProfilePicture />
      </div>
      <div className="flex flex-col gap-extraLarge mt-large">
        <Projects />
        <Footer />
      </div>
    </div>
    </QueryClientProvider>
  );
}
