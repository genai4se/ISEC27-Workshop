
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

const topics = [
  "Agentic AI and Autonomous Software Actors",
  "Software Engineering for GenAI and Agentic Systems",
  "GenAI Across the Software Development Lifecycle (SDLC)",
  "AgentOps: Operating, Monitoring, and Maintaining Agents",
  "Legacy Modernization, Model Engineering, and Reverse Engineering",
  "Trust, Security, Privacy, and Provenance",
  "Human-AI Collaboration, Oversight, and Control",
  "Software Architecture and Design for GenAI and Agentic Applications",
  "Evaluation, Benchmarking, and Sustainable AI Systems",
];

const Overview = () => {
  return (
    <section id="overview" className="py-16 md:py-20 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Workshop Overview
          </h2>
        </div>

        <div className="grid items-start gap-8 mb-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
              Generative AI is evolving from coding assistants and co-pilots
              toward AI systems that can plan, decide, and act inside software
              systems under human oversight. These systems are increasingly being
              explored across requirements, development, testing, maintenance,
              debugging, architecture, and other software engineering activities.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              The Fourth Workshop on Generative AI & Software Engineering
              explores Agentic AI, multi-agent systems, AgentOps, software
              architecture, legacy modernization, trust and security,
              human-AI collaboration, and the engineering challenges of
              building, operating, evaluating, and trusting AI actors in
              real-world software environments.
            </p>
          </div>

          <Card className="border border-border bg-card p-5 shadow-card">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Important Dates
            </h4>
            <div className="text-sm">
              <ul className="space-y-3">
                {importantDates.map((importantDate) => (
                  <li
                    className="border-b border-border pb-3 leading-snug text-muted-foreground last:border-0 last:pb-0"
                    key={importantDate.label}
                  >
                    <strong className="text-sm text-foreground">
                      {importantDate.date}
                    </strong>
                    <br />
                    {importantDate.label}
                  </li>
                ))}
                <li className="leading-snug">
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

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 transition-shadow duration-200 hover:shadow-card border border-border bg-card"
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="workshop-topics-heading">
          <div className="mb-6 text-center">
            <h3
              id="workshop-topics-heading"
              className="text-2xl font-bold text-foreground"
            >
              Workshop Topics
            </h3>
          </div>

          <Card className="border border-border p-6 shadow-card md:p-8">
            <ul className="grid gap-x-8 gap-y-3 text-base text-muted-foreground md:grid-cols-2">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </section>
  );
};

export default Overview;
