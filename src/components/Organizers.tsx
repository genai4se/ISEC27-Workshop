import { Card } from "@/components/ui/card";
import { Building2, FlaskConical } from "lucide-react";
import raveendraImage from "@/assets/organizer/raveendra.png";
import vibhuImage from "@/assets/organizer/vibhu-hd.jpg";
import ravindraImage from "@/assets/organizer/Ravindra Naik.png";
import karthikImage from "@/assets/organizer/karthik.jpg";
import rushikeshImage from "@/assets/organizer/rushikesh-hd.jpg";
import lalitImage from "@/assets/organizer/lalit.png";
import shrutiImage from "@/assets/organizer/shruti.jpeg";

const organizers = [
  {
    name: "Raveendra Kumar Medicherla",
    title: "Principal Scientist",
    org: "TCS Research",
    category: "General Chairs",
    image: raveendraImage,
    bio: "He has 28+ years of experience in software services delivery and related research. His research interests include symbolic AI, Generative AI, neuro-symbolic techniques for software systems transformation, and software testing.",
    interests: ["Symbolic AI", "Generative AI", "Neuro-symbolic Systems", "Software Testing"],
  },
  {
    name: "Vibhu Saujanya Sharma",
    title: "Innovation Research Principal Director",
    org: "Accenture Labs",
    category: "General Chairs",
    image: vibhuImage,
    bio: "He has 20+ years of experience in industrial and academic research in software metrics and process insights, cloud computing, and green software engineering. He has published more than 65+ peer-reviewed papers and is an inventor in 80+ granted patents. His current research focuses on GenAI and agentic AI in software engineering.",
    interests: ["GenAI & Agentic AI", "Software Metrics", "Green Software Engineering"],
  },
  {
    name: "Ravindra Naik",
    title: "Professor of Practice",
    org: "COEP Technological University",
    category: "Program Chairs",
    image: ravindraImage,
    bio: "Former Chief Scientist at TCS Research, he has over 36 years of experience in industry research around software transformations and development tools. His work spans code analysis, software modelling, code synthesis, natural-language analysis, reasoning, ML, and GenAI for software engineering. He has 24+ publications and 10+ unique patents.",
    interests: ["Software Transformations", "Code Analysis & Synthesis", "GenAI for SE"],
  },
  {
    name: "Karthik Vaidhyanathan",
    title: "Assistant Professor",
    org: "Software Engineering Research Center, IIIT-Hyderabad",
    category: "Program Chairs",
    image: karthikImage,
    bio: "He is associated with the leadership team of the Smart City Living Lab. His research focuses on the intersection of software architecture and machine learning, particularly Generative AI, sustainable software systems, and architecting practices for ML-enabled software. He serves as a reviewer and program committee member in international workshops, conferences, and journals, and is an editorial board member of IEEE Software.",
    interests: ["Software Architecture", "ML-enabled Systems", "Sustainable Software"],
  },
  {
    name: "Rushikesh Joshi",
    title: "Professor",
    org: "IIT Bombay",
    category: "Program Chairs",
    image: rushikeshImage,
    bio: "He works on program structures, models, and architectures, including computational and ontological modeling, program visualization, model analysis, refactoring, reengineering, and process and event-oriented structures across sequential, concurrent, and distributed systems. His recent work includes process modeling and migration, feature selection and dimensionality reduction, evaluating deep-learning systems for software modeling, and applying ML in computational musicology and linguistics.",
    interests: ["Program Models & Architectures", "Refactoring", "Process Modeling"],
  },
  {
    name: "Lalit Mohan Sanagavarapu",
    title: "Independent Security Researcher",
    org: "Guest faculty, IIIT-H and IIT-H",
    category: "General Chairs",
    image: lalitImage,
    bio: "He has 27+ years of experience in cybersecurity and building large-scale systems for banking and financial services. He has 40+ publications and 2 patents, with research interests in cybersecurity, software engineering for AI/ML, information retrieval and extraction, and cloud computing.",
    interests: ["Cybersecurity", "SE for AI/ML", "Cloud Computing"],
  },
  {
    name: "Shruti Chille",
    title: "Researcher and Developer",
    org: "TCS Research",
    category: "Web, Social Media & Publicity Chair",
    image: shrutiImage,
    bio: "She works as a Researcher and Developer at TCS Research, contributing to software engineering research and development initiatives. Her role involves supporting research-oriented projects and translating technical ideas into practical software solutions.",
    interests: ["Software Engineering Research"],
  },
];

const chairGroups = [
  "General Chairs",
  "Program Chairs",
  "Web, Social Media & Publicity Chair",
];

const Organizers = () => {
  return (
    <section id="organizers" className="py-16 md:py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Workshop Organizers</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Researchers and practitioners from academia and industry advancing Generative AI and Software Engineering.
          </p>
        </div>

        {chairGroups.map((group) => (
          <div key={group} className="mb-12 last:mb-0">
            <h3 className="text-xl font-semibold text-primary mb-5 text-center">{group}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {organizers
                .filter((organizer) => organizer.category === group)
                .map((organizer) => (
                  <Card
                    key={organizer.name}
                    className="flex flex-col overflow-hidden border border-border bg-card transition-all duration-200 hover:shadow-card hover:-translate-y-0.5"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={organizer.image}
                        alt={`${organizer.name}, ${organizer.title}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h4 className="text-lg font-semibold text-card-foreground mb-0.5">{organizer.name}</h4>
                      <p className="text-sm text-primary font-medium mb-1.5">{organizer.title}</p>
                      <div className="flex items-start gap-1.5 text-xs text-muted-foreground mb-4">
                        <Building2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span>{organizer.org}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{organizer.bio}</p>

                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;
