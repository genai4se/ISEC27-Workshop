import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import KeyTopicsOfDiscussion from "@/components/KeyTopicsOfDiscussion";
import CFP from "@/components/CFP";
import WorkshopSchedule from "@/components/WorkshopSchedule";
import Organizers from "@/components/Organizers";
import Footer from "@/components/Footer";
import ProgramChairs from "@/components/ProgramChairs";
import DetailedCFP from "@/components/DetailedCFP"; 
import MicrosoftCMTNotice from "@/components/MicrosoftCMTNotice";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <KeyTopicsOfDiscussion />
      <CFP />
      <ProgramChairs />
      <WorkshopSchedule />
      <Organizers />
      <MicrosoftCMTNotice />
      <Footer />
    </main>
  );
};

export default Index;
