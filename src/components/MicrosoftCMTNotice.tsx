import { ShieldCheck } from "lucide-react";

const MicrosoftCMTNotice = () => {
  return (
    <section
      aria-label="Microsoft CMT Acknowledgement"
      className="bg-[#F5F7FC] border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-7">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 items-start">

          {/* Left heading */}
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-indigo-700 shrink-0 mt-0.5" />

            <div>
              <h3 className="text-base font-semibold text-slate-800">
                Acknowledgement
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-indigo-600" />
            </div>
          </div>

          {/* Right content */}
          <p className="text-sm md:text-[15px] leading-7 text-slate-600">
            The Microsoft CMT service was used for managing the
            peer-reviewing process for this conference. This service
            was provided for free by Microsoft and they bore all
            expenses, including costs for Azure cloud services as
            well as for software development and support.
          </p>

        </div>
      </div>
    </section>
  );
};

export default MicrosoftCMTNotice;