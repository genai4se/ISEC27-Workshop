const programChairs = [
    { name: "Chandan Prakash", affiliation: "TCS Research" },
    { name: "Ezudheen P", affiliation: "GEC Trissur" },
    { name: "KV Raghavan", affiliation: "Indian Institute of Science, Bangalore" },
    { name: "Pavan Chittimalli", affiliation: "TCS Research" },
    { name: "Rohit Mehra", affiliation: "Accenture Labs" },
    { name: "Sayandeep Mitra", affiliation: "TCS Research" },
    { name: "Snigdha Athaiya", affiliation: "Affiliation not available in the email" },
    { name: "Stanley Samuel", affiliation: "Collins Aerospace" },
    { name: "Sujit Kumar Chakrabarti", affiliation: "IIIT Bangalore" },
    { name: "Vinay Raj", affiliation: "National Institute of Technology Warangal" },
];

const ProgramChairs = () => {
    return (
        <section id="program-chairs" className="py-16 md:py-20 px-6 bg-gradient-section">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        PC Reviewers
                    </h2>
                </div>

                <div className="rounded-md border border-border bg-muted/60 p-8 shadow-card">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {programChairs.map((chair) => (
                            <div
                                key={chair.name}
                                className="p-4 rounded-lg bg-background/60 border border-border"
                            >
                                <p className="text-lg font-medium text-foreground">
                                    {chair.name}{" "}
                                    <span className="text-muted-foreground">
                                        ({chair.affiliation})
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProgramChairs;
