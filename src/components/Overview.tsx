
import { Card } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Users } from "lucide-react";
import { importantDates } from "@/components/CFP";

const features = [
  {
    icon: Brain,
    title: "Agentic AI Systems",
    description:
      "Explore AI actors, agentic systems, multi-agent collaboration, planning, decision-making, and autonomous action in software engineering.",
  },
  {
    icon: Code,
    title: "Software Engineering for AI",
    description:
      "Explore software engineering practices for designing, building, testing, deploying, operating, and maintaining GenAI and agentic software systems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description:
      "Discover emerging advances in Generative AI, LLMs, agentic systems, AgentOps, legacy modernization, reverse engineering, and AI-driven software engineering.",
  },
  {
    icon: Users,
    title: "Community & Collaboration",
    description:
      "Bring together researchers and practitioners from academia and industry to discuss real-world challenges in enterprise software engineering and AI-enabled systems.",
  },
];

const Overview = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-start gap-8 mb-16 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Workshop Overview
            </h2>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
              Generative AI is evolving from coding assistants and co-pilots
              toward AI systems that can plan, decide, and act inside software
              systems under human oversight. These systems are increasingly being
              explored across requirements, development, testing, maintenance,
              debugging, architecture, and other software engineering activities.
            </p>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The Fourth Workshop on Generative AI & Software Engineering
              explores Agentic AI, multi-agent systems, AgentOps, software
              architecture, legacy modernization, trust and security,
              human-AI collaboration, and the engineering challenges of
              building, operating, evaluating, and trusting AI actors in
              real-world software environments.
            </p>
          </div>

          <Card className="border-2 border-primary/10 bg-card p-5 shadow-sm">
            <h4 className="mb-4 text-center text-xl font-bold text-primary">
              IMPORTANT DATES
            </h4>
            <div className="text-sm">
              <ul className="space-y-3">
                {importantDates.map((importantDate) => (
                  <li
                    className="border-b border-primary/10 pb-3 leading-snug text-muted-foreground last:border-0 last:pb-0"
                    key={importantDate.label}
                  >
                    <strong className="text-sm text-primary">
                      {importantDate.date}
                    </strong><br />
                    {importantDate.label}
                  </li>
                ))}
                <li className="border-b border-primary/10 pb-3 leading-snug text-muted-foreground last:border-0 last:pb-0">
                  <a
                    className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
                    href="#importantDates"
                  >
                    All dates →
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-hero text-white shadow-glow">
          <h3 className="text-3xl font-bold mb-4">Workshop Topics</h3>

          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Agentic AI and Autonomous Software Actors</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Software Engineering for GenAI and Agentic Systems</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>GenAI Across the Software Development Lifecycle (SDLC)</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>AgentOps: Operating, Monitoring, and Maintaining Agents</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Legacy Modernization, Model Engineering, and Reverse Engineering</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Trust, Security, Privacy, and Provenance</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Human-AI Collaboration, Oversight, and Control</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Software Architecture and Design for GenAI and Agentic Applications</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Evaluation, Benchmarking, and Sustainable AI Systems</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Overview;

