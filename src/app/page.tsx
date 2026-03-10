import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { Hero } from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
