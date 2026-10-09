import { Card } from "@/components/ui/card";
import { Bot, BrainCircuit, Gauge, LockKeyhole, Network, ShieldCheck, Sparkles, UsersRound, Wrench } from "lucide-react";


const questions = [
  {
    icon: Network,
    title: "Knowledge & Context",
    text: "How can agents access domain knowledge and enterprise context at the right time during the SDLC?"
  },
  {
    icon: BrainCircuit,
    title: "Effective AI Augmentation",
    text: "What forms of AI augmentation make software teams more effective, not merely faster?"
  },
  {
    icon: Bot,
    title: "Agent Architectures",
    text: "How should autonomous agents and multi-agent systems be designed, coordinated, and operated?"
  },
  {
    icon: Gauge,
    title: "Evaluation & Reliability",
    text: "What benchmarks, datasets, metrics, and evaluation methods best measure GenAI and agent performance?"
  },
  {
    icon: Sparkles,
    title: "Legacy Modernization",
    text: "Can GenAI accelerate modernization, reverse engineering, and transformation of legacy systems?"
  },
  {
    icon: LockKeyhole,
    title: "Autonomy & Human Oversight",
    text: "Where should the boundary lie between AI autonomy and human control in software systems?"
  },

  {
    icon: ShieldCheck,
    title: "Trust, Security & AgentOps",
    text: "How can organizations build, monitor, secure, and govern trustworthy agentic systems?"
  },

  {
    icon: UsersRound,
    title: "Future Skills & Human-AI Collaboration",
    text: "What new skills, roles, and learning models are needed as GenAI evolves from co-pilot to actor?"
  },
  {
    icon: Wrench,
    title: "Technical Debt",
    text: "What new forms of technical debt and code smells may emerge in agent-based software systems?"
  }
];

const KeyTopicsOfDiscussion = () => {
  return (
    <section id="discussion" className="py-16 md:py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Topics of Discussion</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            The workshop seeks discussion and exploration of critical questions surrounding Generative AI, Agentic AI, and Software Engineering.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {questions.map((question) => (
            <Card key={question.title} className="p-6 transition-shadow duration-200 hover:shadow-card border border-border bg-card">
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <question.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{question.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{question.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopicsOfDiscussion;
