
import {
    CalendarDays,
    CheckCircle2,
    FileCheck2,
    FileText,
    Mail,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const researchTracks = [
    {
        title: "GenAI and Agentic AI in Software Engineering",
        topics: [
            "Requirements engineering, analysis, UI/UX, architecture, and design",
            "Software development, maintenance, refactoring, and re-engineering",
            "Configuration, verification, testing, and debugging",
            "Legacy modernization, model engineering, and reverse engineering",
            "Retrieval-augmented techniques for software analysis",
            "Agentic and multi-agent frameworks",
            "New roles, skills, agent tutors, and human-AI collaboration",
        ],
    },
    {
        title: "Software Engineering for GenAI and Agentic AI",
        topics: [
            "Human interaction with LLMs, agents, and autonomous AI actors",
            "Architecture and design patterns for GenAI and agentic applications",
            "AgentOps for operating, monitoring, and maintaining agents",
            "Human oversight, escalation, control, and boundaries of autonomy",
            "Software quality, security, privacy, trust, provenance, and evaluation",
            "Sustainable GenAI-based and agent-based systems",
            "Evaluation and benchmarking of agentic AI systems",
        ],
    },
];

const acceptanceCriteria = [
    "Clarity in articulating the problem being solved",
    "Clear need for Generative AI in addressing the problem",
    "Application of Software Engineering practices in GenAI",
    "Novelty of the proposed approach",
];

export const importantDates = [
    {
        date: "8 Nov 2026",
        label: "Submission Deadline",
        description: "Papers and extended abstracts/poster papers.",
    },
    {
        date: "8 Dec 2026",
        label: "Acceptance Notification",
        description: "Notification of accepted papers and extended abstracts/poster papers.",
    },
    {
        date: "14 Dec 2026",
        label: "Camera-Ready Deadline",
        description: "Camera-ready papers and information for the workshop chairs.",
    },
    {
        date: "18 Feb 2027",
        label: "Workshop Date",
        description: "SPIT Mumbai, India.",
    },
];

const CFP = () => {
    return (
        <section id="cfp" className="py-16 md:py-20 px-6 bg-background">
            <div className="mx-auto max-w-6xl">

                {/* Call for Papers */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        Call for Papers
                    </h2>

                    <p className="mx-auto max-w-4xl text-base md:text-lg leading-relaxed text-muted-foreground">
                        We invite original papers, extended abstracts, and poster papers
                        describing research, case studies, interesting experiments, best
                        practices, and lessons learned in applying Generative AI and
                        Agentic AI to Software Engineering, as well as work applying
                        Software Engineering practices to build GenAI-enabled and
                        agentic tools.
                    </p>
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
                            Topics of interest include but are not limited to:
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        {researchTracks.map((track) => (
                            <Card
                                key={track.title}
                                className="border border-border p-6 shadow-card"
                            >
                                <h4 className="mb-4 text-lg font-semibold text-card-foreground">
                                    {track.title}
                                </h4>

                                <ul className="space-y-2.5 text-sm text-muted-foreground">
                                    {track.topics.map((topic) => (
                                        <li key={topic} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Important Dates */}
                <section
                    id="importantDates"
                    className="mt-12"
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
                            const icons = [CalendarDays, Mail, FileText, CalendarDays];
                            const DateIcon = icons[index];

                            return (
                                <Card key={importantDate.label} className="border border-border p-6 shadow-card transition-shadow duration-200 hover:shadow-glow">
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


                {/* Submission Categories */}
                <section
                    className="mt-12"
                    aria-labelledby="submission-types-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="submission-types-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            Submission Categories
                        </h3>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        <Card className="border border-border p-6 shadow-card">
                            <FileCheck2 className="mb-4 h-7 w-7 text-primary" />

                            <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                                Papers
                            </h4>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                We solicit submissions in the form of papers in ISEC&apos;27{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.acm.org/publications/proceedings-template"
                                    className="text-primary hover:underline"
                                >
                                    standard ACM format with 4 pages.
                                </a>
                            </p>
                        </Card>

                        <Card className="border border-border p-6 shadow-card">
                            <FileText className="mb-4 h-7 w-7 text-primary" />

                            <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                                Extended Abstracts &amp; Poster Papers
                            </h4>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Original 2-page submissions in English, submitted
                                through Microsoft CMT. They may describe case studies, experiments,
                                best practices, or lessons learned (including figures, appendix, and references).
                            </p>
                        </Card>

                    </div>
                </section>

                {/* Submission Details */}
                <section
                    className="mt-12"
                    aria-labelledby="submission-details-heading"
                >
                    <div className="mb-6 text-center">
                        <h3
                            id="submission-details-heading"
                            className="text-2xl font-bold text-foreground"
                        >
                            Submission Details
                        </h3>
                    </div>

                    <Card className="border border-border p-6 shadow-card md:p-8">

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
                                    https://www.acm.org/publications/proceedings-template
                                </a>
                            </p>

                            <p>
                                <strong className="font-semibold text-foreground">
                                    Submission link:
                                </strong>{"   "}
                                The workshop submission link will be added here once the
                                official Microsoft CMT submission page is available.
                            </p>

                            <p>
                                <strong className="font-semibold text-foreground">
                                    Publication policy:
                                </strong>{" "}
                                <a
                                    href="https://conf.researchr.org/track/isec-2027/isec-2027-research-papers#call-Publication-Policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline break-all"
                                >
                                    https://conf.researchr.org/track/isec-2027/isec-2027-research-papers#call-Publication-Policy
                                </a>
                            </p>
                        </div>
                    </Card>
                </section>


                {/* Acceptance Criteria */}
                <Card className="mt-12 border border-border bg-muted/50 p-6 shadow-card md:p-10">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">
                        Acceptance Criteria
                    </h3>

                    <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                        Submissions will be reviewed by experts from research and
                        industry. Selection will consider the following tentative
                        criteria:
                    </p>

                    <ul className="space-y-2.5 text-base text-muted-foreground">
                        {acceptanceCriteria.map((criterion) => (
                            <li key={criterion} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span>{criterion}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                        Authors of accepted submissions will receive further instructions
                        for preparing their camera-ready presentations. At least one author
                        of an accepted paper must register for the ISEC conference to
                        present the paper.
                    </p>
                </Card>

            </div>
        </section>
    );
};

export default CFP;
