
import {
    CalendarDays,
    CheckCircle2,
    FileCheck2,
    FileText,
    Mail,
    ExternalLink,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const topicsOfInterest = [
    {
        title: "Rethinking Software Development",
        description:
            "How does software engineering change when AI can do more than generate code, and work together with developers?",
    },
    {
        title: "Engineering Systems of AI Agents",
        description:
            "What does it take to build AI systems containing multiple AI agents that can act reliably in real software environments, and how can we detect and handle their failures?",
    },
    {
        title: "Understanding and Modernising Enterprise Software",
        description:
            "How can we transform large, complex software systems without losing the business knowledge built into them using AI agents?",
    },
    {
        title: "Building AI-Native Software and Digital Products",
        description:
            "What changes when AI is incorporated into a software product or application from the beginning, essentially the SDLC for AI-native software?",
    },
    {
        title: "From Software Automation to Business Transformation",
        description:
            "How will AI-driven software change the way organisations work, serve customers, and create value, including its impact on business processes, business operations, decision support, and customer service?",
    },
    {
        title: "Software Quality, Security, and Trust",
        description:
            "How can we ensure that AI-driven software does what it is supposed to do—and does not do what it should not—especially regarding correctness, security, confidentiality, traceability of decisions, regulatory compliance, and trustworthiness?",
    },
    {
        title: "India-Centred Challenges and Opportunities",
        description:
            "How can AI-driven software engineering address challenges particularly relevant to India, including local languages, modernisation of systems, voice interfaces, cities, transport, and infrastructure?",
    },
];

const contributions = [
    {
        title: "Research Papers",
        description:
            "Presenting new methods, techniques, architectures, tools, or experimental findings.",
    },
    {
        title: "Industrial Case Studies",
        description:
            "Describing applications of Generative AI or AI agents to real software engineering and business problems, including unexpected results, challenges, failures, and approaches that worked in real projects.",
    },
    {
        title: "Demonstrations and Prototypes",
        description:
            "Illustrating new capabilities or practical tools to address important software engineering problems.",
    },
    {
        title: "Evaluation Studies",
        description:
            "Examining quality, reliability, security, traceability of decisions, performance, cost, or business value of AI-driven approaches.",
    },
    {
        title: "Extended Abstracts",
        description:
            "Presenting emerging ideas, open challenges, and promising directions for future research.",
    },
];

const acceptanceCriteria = [
    "Importance of the problem",
    "Originality",
    "Clarity of articulation",
    "Soundness of the approach",
    "Supporting evidence",
    "Contribution to software engineering research or practice",
];

export const importantDates = [
    {
        date: "8 Nov 2026",
        label: "Submission Deadline",
        description: "Paper and extended abstract submission deadline.",
    },
    {
        date: "8 Dec 2026",
        label: "Acceptance Notification",
        description: "Notification of acceptance.",
    },
    {
        date: "14 Dec 2026",
        label: "Camera-Ready Submission",
        description: "Camera-ready submission deadline.",
    },
    {
        date: "18 Feb 2027",
        label: "Workshop Date",
        description: "SPIT Mumbai, India.",
    },
];

const CFP = () => {
    return (
        <section
            id="cfp"
            className="scroll-mt-24 py-16 md:py-20 px-6 bg-background"
        >
            <div className="mx-auto max-w-6xl">


                {/* Call for Papers */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        Call for Papers
                    </h2>

                    {/* <h3 className="mx-auto max-w-4xl text-xl font-semibold text-foreground leading-relaxed">
                        Workshop: Generative AI and Software Engineering:
                        From Copilots to Actors
                    </h3>

                    <p className="mt-3 text-sm font-medium text-primary">
                        Co-located with{" "}
                        <a
                            href="https://conf.researchr.org/home/isec-2027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            ISEC&apos;27
                        </a>
                        {" "} | SPIT Mumbai | 18 Feb 2027
                    </p> */}

                    <p className="mx-auto mt-6 max-w-4xl text-base md:text-lg leading-relaxed text-muted-foreground">
                        We invite original research papers, industrial case studies,
                        experiments, demonstrations, evaluation studies, and extended
                        abstracts from researchers and practitioners in academia and
                        industry. We particularly welcome contributions presenting
                        new techniques, practical experiences, unexpected findings,
                        failures, and lessons learned in applying Generative AI and
                        Agentic AI to software engineering and real-world business
                        problems.
                    </p>

                    {/* ADD THE BUTTON HERE */}
                    <div className="mt-6 flex justify-center">
                        <Link
                            to="/detailed-cfp"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                        >
                            View Detailed CFP
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>

                </div>


                {/* Topics of Interest */}
                <section
                    className="mt-12"
                    aria-labelledby="research-tracks-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="research-tracks-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            Topics of Interest
                        </h3>

                        <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground">
                            We welcome original research papers, industrial case studies,
                            experiments, demonstrations, and experience reports on the
                            following themes, including but not limited to them.
                        </p>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                        {topicsOfInterest.map((topic, index) => (
                            <Card
                                key={topic.title}
                                className="border border-border p-4 shadow-card"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                                        {String.fromCharCode(97 + index)}
                                    </span>

                                    <h4 className="text-sm md:text-base font-medium leading-snug text-card-foreground">
                                        {topic.title}
                                    </h4>
                                </div>
                            </Card>
                        ))}
                    </div>

                </section>



                {/* Contributions */}
                <section
                    className="mt-12"
                    aria-labelledby="contributions-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="contributions-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            What Kinds of Contributions Are We Looking For?
                        </h3>

                        <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground">
                            We welcome contributions from both academia and industry.
                        </p>
                    </div>


                    <Card className="border border-border p-5 shadow-card md:p-6">
                        <ul className="grid gap-3 md:grid-cols-2">
                            {contributions.map((contribution) => (
                                <li
                                    key={contribution.title}
                                    className="flex items-center gap-2.5"
                                >
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />

                                    <span className="text-sm md:text-base font-medium text-card-foreground">
                                        {contribution.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card>


                </section>

                  {/* Important Dates */}
                <section
                    id="importantDates"
                    className="mt-12 scroll-mt-24"
                    aria-labelledby="important-dates-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="important-dates-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            Important Dates
                        </h3>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {importantDates.map((importantDate, index) => {
                            const icons = [
                                CalendarDays,
                                Mail,
                                FileText,
                                CalendarDays,
                            ];

                            const DateIcon = icons[index];

                            return (
                                <Card
                                    key={importantDate.label}
                                    className="border border-border p-6 shadow-card transition-shadow duration-200 hover:shadow-glow"
                                >
                                    <DateIcon className="mb-4 h-7 w-7 text-primary" />

                                    <h4 className="mb-1.5 text-base font-semibold text-card-foreground">
                                        {importantDate.label}
                                    </h4>

                                    <p className="mb-2 text-xl font-bold text-primary">
                                        {importantDate.date}
                                    </p>

                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {importantDate.description}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Submission Guidelines */}
                <section
                    className="mt-12"
                    aria-labelledby="submission-guidelines-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="submission-guidelines-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            Submission Guidelines
                        </h3>

                        <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground">
                            We invite original contributions in the following formats:
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        <Card className="border border-border p-6 shadow-card">
                            <FileCheck2 className="mb-4 h-7 w-7 text-primary" />

                            <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                                Research Papers, Case Studies &amp; Evaluation Studies
                            </h4>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Up to <strong>4 pages</strong>, prepared in the
                                ISEC 2027 ACM format.
                            </p>
                        </Card>

                        <Card className="border border-border p-6 shadow-card">
                            <FileText className="mb-4 h-7 w-7 text-primary" />

                            <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                                Extended Abstracts &amp; Demo Abstracts
                            </h4>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Up to <strong>500 words</strong>, describing the problem,
                                approach, key findings or expected contribution, and
                                relevance to the workshop.
                            </p>
                        </Card>
                    </div>

                    {/* Submission Details */}
                    <Card className="mt-5 border border-border p-6 shadow-card md:p-8">
                        <h4 className="mb-4 text-lg font-semibold text-card-foreground">
                            Submission Details
                        </h4>

                        <p className="mb-4 text-sm text-muted-foreground">
                            All submissions must be original and written in English.
                        </p>

                        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">

                            <p>
                                <strong className="font-semibold text-foreground">
                                    Submission template:
                                </strong>{" "}
                                <a
                                    href="https://www.acm.org/publications/proceedings-template"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    ACM Proceedings Template
                                </a>
                            </p>

                            <p>
                                <strong className="font-semibold text-foreground">
                                    Submission link:
                                </strong>{" "}
                                <a
                                    href="https://cmt3.research.microsoft.com/GenAISE2027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    Submit via Microsoft CMT
                                    <ExternalLink className="ml-1 inline h-4 w-4" />
                                </a>
                            </p>

                            <p>
                                <strong className="font-semibold text-foreground">
                                    Publication policy:
                                </strong>{" "}
                                <a
                                    href="https://conf.researchr.org/track/isec-2027/isec-2027-research-papers#call-Publication-Policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    ISEC&apos;27 Publication Policy
                                    <ExternalLink className="ml-1 inline h-4 w-4" />
                                </a>
                            </p>

                        </div>
                    </Card>

                </section>

                {/* Review and Selection Criteria */}
                <section
                    className="mt-12"
                    aria-labelledby="review-criteria-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="review-criteria-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            Review and Selection Criteria
                        </h3>
                    </div>

                    <Card className="border border-border p-6 shadow-card md:p-8">
                          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                            Submissions will be reviewed by experts from academia
                            and industry. Selection will consider the importance
                            of the problem, originality, clarity of articulation,
                            soundness of the approach, supporting evidence, and
                            contribution to software engineering research or practice.
                        </p>

                        <p className="text-sm leading-relaxed text-muted-foreground">
                            At least one author of each accepted submission must
                            register for the ISEC conference and present the work
                            at the workshop.
                        </p>
                    </Card>
                </section>

              
            </div>
        </section>
    );
};

export default CFP;
