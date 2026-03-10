import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {FaHome} from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";


export default function HomePage() {
    return(
       <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full items-center">
         <FloatingNav navItems = {[
            {name: 'Home', link: '/', icon: <FaHome/>},
            {name: 'About', link: '/', icon: <FaHome/>},
            {name: 'Projects', link: '/', icon: <FaHome/>},
            {name: 'Contact', link: '/', icon: <FaHome/>}
         ]}/>
           <Hero />
           <Grid/>
           <RecentProjects/>
           <Experience/>
           
        <Footer />
           
        </div>
       </main>
    );
}