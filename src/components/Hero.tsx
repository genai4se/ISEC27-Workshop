import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-accent/80" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-glow rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <p className="text-white/90 text-sm font-medium">Fourth Workshop @ ISEC&apos;27</p>
        </div>

        <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Generative AI &amp; <br />
          <span className="bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
            Software Engineering - Co-Pilots to Actors
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Exploring the evolution of Generative AI from co-pilots to actors,
          with a focus on building, operating, evaluating, and trusting
          autonomous AI systems in real-world software environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#schedule" aria-label="Program schedule announced soon">
            <Button variant="hero" size="lg" className="group">
              Program Schedule — Announced soon
              <Calendar className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap gap-8 justify-center text-white/90">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">February 18, 2027</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">SPIT Mumbai, India</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
