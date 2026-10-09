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

const KeyTopicsOfDiscussion
  = () => {
    return (
      <section id="discussion" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Key Topics of Discussion</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The workshop seeks discussion and exploration of critical questions surrounding Generative AI, Agentic AI, and Software Engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {questions.map((question) => (
              <Card key={question.title} className="group relative overflow-hidden p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-lg">
                  <question.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">{question.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{question.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default KeyTopicsOfDiscussion
  ;
