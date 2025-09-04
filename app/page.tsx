import { Footer } from "./containers/footer";
import { Header } from "./containers/header";
import { Hero } from "./containers/hero";
import { Projects } from "./containers/projects";
import { Services } from "./containers/services";
import { Skills } from "./containers/skills";
import { Technologies } from "./containers/technologies";
import { Timeline } from "./containers/timeline";
import { Contact } from "./containers/contact";

export default function Home() {
  return (
    <div className="w-full overflow-hidden relative ">
      <div className="absolute opacity-15 blur-md w-[60%] h-80 bg-gradient-radial from-secondary to-75% to-transparent rounded-full -top-40 left-[40%]" />
      <div className="absolute opacity-15 blur-md w-60 h-96 bg-gradient-radial from-primary-light to-75% to-transparent rounded-full top-60 -left-28" />
      <div className="absolute opacity-15 blur-md w-60 h-96 bg-gradient-radial from-primary-light to-75% to-transparent rounded-full top-[500px] -right-28" />
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Services />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}