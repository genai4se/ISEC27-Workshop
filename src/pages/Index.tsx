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
      <div className="deadline-banner">
        <div className="marquee-container" aria-label="Submission deadline extended to 16 November 2026">
          <div className="marquee-content">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                className="marquee-item"
                aria-hidden={index > 0 ? true : undefined}
                key={index}
              >
                <span className="marquee-separator" aria-hidden="true">•</span>
                <span className="font-semibold">Submission Deadline Extended:</span>
                <span className="line-through text-slate-500">8 November 2026</span>
                <span className="font-bold text-red-700">16 November 2026</span>
                <span className="marquee-separator" aria-hidden="true">•</span>
                <span>Submit your paper before the revised deadline</span>
              </div>
            ))}
          </div>
        </div>
      </div>

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
