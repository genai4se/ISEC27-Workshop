
import {
    ArrowLeft,
    ArrowUpRight,
    CalendarDays,
    CheckCircle2,
    FileText,
    ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { importantDates } from "@/components/CFP";

const submissionUrl =
    "https://cmt3.research.microsoft.com/GenAISE2027";

const policyUrl =
    "https://conf.researchr.org/track/isec-2027/isec-2027-research-papers#call-Publication-Policy";

const topics = [
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
            "How will AI-driven software change the way organisations work, serve customers, and create value, including business processes, operations, decision support, and customer service?",
    },
    {
        title: "Software Quality, Security, and Trust",
        description:
            "How can we ensure that AI-driven software does what it is supposed to do—and does not do what it should not—especially regarding correctness, security, confidentiality, traceability of decisions, regulatory compliance, and trustworthiness?",
    },
    {
        title: "India-Centred Challenges and Opportunities",
        description:
            "How can AI-driven software engineering address challenges relevant to India, including local languages, modernisation of systems, voice interfaces, cities, transport, and infrastructure?",
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
const contributions = [
    {
        title: "Research Papers",
        description:
            "New methods, techniques, architectures, tools, or experimental findings.",
    },
    {
        title: "Industrial Case Studies",
        description:
            "Applications of Generative AI or AI agents to real software engineering and business problems, including unexpected results, challenges, failures, and approaches that worked in real projects.",
    },
    {
        title: "Demonstrations and Prototypes",
        description:
            "New capabilities or practical tools addressing important software engineering problems.",
    },
    {
        title: "Evaluation Studies",
        description:
            "Quality, reliability, security, traceability of decisions, performance, cost, or business value of AI-driven approaches.",
    },
    {
        title: "Extended Abstracts",
        description:
            "Emerging ideas, open challenges, and promising directions for future research.",
    },
];

const reviewCriteria = [
    "Importance of the problem",
    "Originality",
    "Clarity of articulation",
    "Soundness of the approach",
    "Supporting evidence",
    "Contribution to software engineering research or practice",
];

const DetailedCFP = () => {
    const homeUrl = import.meta.env.BASE_URL;

    return (
        <main className="min-h-screen bg-background">

            {/* Header */}
            <div className="border-b border-border bg-gradient-section">
                <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">

                    <a
                        href={`${homeUrl}#cfp`}
                        className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Workshop Website
                    </a>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        GenAI&SE 2027
                    </p>

                    <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                        Detailed Call for Papers
                    </h1>

                    <h2 className="mt-4 max-w-4xl text-xl font-semibold leading-relaxed text-foreground">
                        Generative AI and Software Engineering:
                        From Copilots to Actors
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground">
                        Co-located with ISEC&apos;27 | SPIT Mumbai |
                        18 February 2027
                    </p>

                    {/* Submission and Publication Policy Buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        {/* Submit Paper - Primary Button */}
                        <a
                            href={submissionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Submit Paper
                            <ArrowUpRight className="h-4 w-4" />
                        </a>

                        {/* Publication Policy - Transparent Button */}
                        <a
                            href={policyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                        >
                            Publication Policy
                            <ArrowUpRight className="h-4 w-4" />
                        </a>

                    </div>
                </div>


            </div>

            <div className="mx-auto max-w-6xl space-y-14 px-6 py-12 md:py-16">

                {/* Workshop Introduction */}
                <section className="max-w-5xl space-y-5 text-base leading-8 text-muted-foreground">
                    <p>
                        Software is entering a new phase. Until recently,
                        Generative AI mainly helped software engineers write
                        code, understand programs, generate tests, and produce
                        documentation. Today, AI systems are starting to plan
                        changes, work across codebases, run tests, and fix
                        problems across software. In the near future, software
                        can understand a business goal, work across several
                        applications, carry out a sequence of tasks, and report
                        the results; software can continually improve itself
                        while remaining secure, reliable, and under human control.
                    </p>

                    <p  >
                        The{" "}
                        <a
                            href="https://genai4se.github.io/ISEC27-Workshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary hover:underline"
                        >
                            Fourth Workshop on Generative AI and Software Engineering
                            (GenAI&SE)
                        </a>
                        , co-located with{" "}
                        <a
                            href="https://conf.researchr.org/home/isec-2027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline"
                        >
                            ISEC&apos;27
                        </a>
                        , invites researchers and practitioners from academia and
                        industry to explore various possibilities. Building on the
                        discussions and contributions of the previous three editions,
                        this year&apos;s workshop moves from AI as a copilot to AI as
                        an actor: a system that can plan and carry out tasks, use
                        software tools, and take actions under human oversight.
                    </p>

                    <p>
                        We are interested in discussing new techniques and
                        practical experiences, unexpected findings, failures,
                        lessons learned, and evidence of what works and what
                        does not while addressing real problems in any business
                        domain.
                    </p>
                </section>

                {/* Topics */}
                <section>
                    <h2 className="mb-3 text-2xl font-bold text-foreground">
                        1. Topics of Interest
                    </h2>

                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        We welcome original research papers, industrial case
                        studies, experiments, demonstrations, and experience
                        reports on the following themes, including but not
                        limited to them.
                    </p>

                    <div className="grid gap-5 md:grid-cols-2">
                        {topics.map((topic, index) => (
                            <Card
                                key={topic.title}
                                className="border border-border p-6 shadow-card"
                            >
                                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                                    <span className="mr-2 text-primary">
                                        {String.fromCharCode(97 + index)}.
                                    </span>
                                    {topic.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {topic.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Contributions */}
                <section>
                    <h2 className="mb-3 text-2xl font-bold text-foreground">
                        2. What Kinds of Contributions Are We Looking For?
                    </h2>

                    <p className="mb-6 text-sm text-muted-foreground">
                        We welcome contributions from both academia and industry.
                    </p>

                    <Card className="border border-border p-6 shadow-card md:p-8">
                        <ul className="space-y-5">
                            {contributions.map((item) => (
                                <li key={item.title} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                            We particularly encourage submissions that go beyond
                            describing the use of an AI tool to explain the
                            problem being solved, the engineering approach adopted,
                            the evidence collected, and the lessons learned.
                            The work does not have to introduce a new AI model
                            or algorithm to be valuable. Contributions that
                            combine existing AI capabilities with sound software
                            engineering methods to solve difficult problems
                            are equally welcome.
                        </p>
                    </Card>
                </section>

                {/* Important Dates */}
                <section>
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                        3. Important Dates
                    </h2>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {importantDates.map((item) => (
                            <Card
                                key={item.label}
                                className="border border-border p-6 shadow-card"
                            >
                                <CalendarDays className="mb-3 h-6 w-6 text-primary" />

                                <h3 className="text-sm font-semibold text-foreground">
                                    {item.label}
                                </h3>

                                <p className="mt-2 text-lg font-bold text-primary">
                                    {item.date}
                                </p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Submission Guidelines */}
                <section>
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                        4. Submission Guidelines
                    </h2>

                    <div className="grid gap-5 md:grid-cols-2">
                        <Card className="border border-border p-6 shadow-card">
                            <FileText className="mb-3 h-7 w-7 text-primary" />

                            <h3 className="mb-2 text-lg font-semibold text-foreground">
                                Research Papers, Case Studies &amp; Evaluation Studies
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Up to 4 pages, prepared in the ISEC 2027 ACM format.
                            </p>
                        </Card>

                        <Card className="border border-border p-6 shadow-card">
                            <FileText className="mb-3 h-7 w-7 text-primary" />

                            <h3 className="mb-2 text-lg font-semibold text-foreground">
                                Extended Abstracts &amp; Demo Abstracts
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Up to 500 words, describing the problem, approach,
                                key findings or expected contribution, and relevance
                                to the workshop.
                            </p>
                        </Card>
                    </div>

                    <Card className="mt-6 border border-border p-6 shadow-card md:p-8">
                        <h4 className="mb-4 text-lg font-semibold text-card-foreground">
                            Submission Details
                        </h4>
                        <p className="mb-5 text-sm text-muted-foreground">
                            All submissions must be original and written in English.
                        </p>

                        <div className="space-y-4 text-sm">
                            <p>
                                <strong>Submission template: </strong>
                                <a
                                    href="https://www.acm.org/publications/proceedings-template"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    ACM Proceedings Template
                                    <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
                                </a>
                            </p>

                            <p>
                                <strong>Submission link: </strong>
                                <a
                                    href={submissionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    Microsoft CMT Submission Portal
                                    <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
                                </a>
                            </p>

                            <p>
                                <strong>Publication policy: </strong>
                                <a
                                    href={policyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    ISEC&apos;27 Publication Policy
                                    <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
                                </a>
                            </p>
                        </div>
                    </Card>



                </section>

                {/* Review and Selection Criteria */}
                <section>
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                        5.  Review and Selection
                    </h2>

                    <Card className="mt-6 border border-border p-6 shadow-card md:p-8">
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                            Submissions will be reviewed by experts from academia and
                            industry. Selection will consider the following criteria:
                        </p>

                        <ul className="space-y-2.5">
                            {acceptanceCriteria.map((criterion) => (
                                <li key={criterion} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span className="text-sm text-muted-foreground">
                                        {criterion}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                            At least one author of each accepted submission must
                            register for the ISEC conference and present the work
                            at the workshop.
                        </p>
                    </Card>
                </section>




                {/* Back to Homepage */}
                <div className="border-t border-border pt-8">
                    <Link
                        to="/#cfp"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Call for Papers
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default DetailedCFP;
