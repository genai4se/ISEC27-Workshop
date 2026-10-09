import { Calendar, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden py-28 md:py-40">
      {/* Background Image with deep navy-to-indigo overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-md border border-white/25 bg-white/5">
          <p className="text-white/85 text-xs md:text-sm font-medium tracking-wide uppercase">
            Fourth Workshop @ ISEC&apos;27
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Generative AI &amp; Software Engineering
          <span className="block mt-2 text-white/85 font-semibold text-2xl md:text-3xl lg:text-4xl">
            Co-Pilots to Actors
          </span>
        </h1>

        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Exploring the evolution of Generative AI from co-pilots to actors,
          with a focus on building, operating, evaluating, and trusting
          autonomous AI systems in real-world software environments.
        </p>

        {/* <div className="flex justify-center mb-10">
          <a
            href="#"
            aria-label="Program schedule announced soon"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <Calendar className="w-4 h-4" />
            Program Schedule — Announced soon
          </a>
        </div> */}

        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-white/85 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>February 18, 2027</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>SPIT Mumbai, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
