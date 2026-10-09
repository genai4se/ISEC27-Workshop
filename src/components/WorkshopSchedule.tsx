import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Morning Session",
    title: "Invited Talks & Papers",
    sessions: [
      {
        time: "09:00 - 09:10",
        topic: "Opening remarks by organizers",
      },
      {
        time: "09:10 - 11:30",
        topic:
          "Invited talks from academics and industry research",
      },
      {
        time: "11:30 - 13:15",
        topic: "Talks based on accepted papers",
      },
    ],
  },
  {
    day: "Afternoon Session",
    title: "Research & Practice",
    sessions: [
      {
        time: "14:00 - 17:00",
        topic:
          "Reviewed papers, case studies, and demos",
      },
    ],
  },
  {
    day: "Closing Session",
    title: "Panel & Wrap-up",
    sessions: [
      {
        time: "17:00 - 17:15",
        topic: "Wrap-up and closing remarks by organizers",
      },
    ],
  },
];

const WorkshopSchedule = () => {
  return (

    <section id="format" className="py-16 md:py-20 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Workshop Format
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Tentative schedule for the full-day workshop with invited talks,
            accepted papers, hands-on sessions, and panel discussions.
          </p>
        </div>

        <div className="space-y-6">
          {schedule.map((day) => (
            <Card
              key={day.day}
              className="overflow-hidden border border-border shadow-card"
            >
              <div className="border-b border-border bg-muted/60 px-6 py-4">
                <h3 className="text-lg font-semibold text-foreground">{day.day}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{day.title}</p>
              </div>

              <div className="p-4 md:p-6 space-y-1">
                {day.sessions.map((session) => (
                  <div
                    key={session.time}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-4 rounded-md p-3 transition-colors hover:bg-muted/60"
                  >
                    <div className="flex min-w-[140px] items-center gap-2 text-sm font-semibold text-primary">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{session.time}</span>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-card-foreground">
                        {session.topic}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-muted-foreground">
            Final format will encourage engaging and strong interactions
            among all participants. Coffee breaks and networking sessions
            included throughout the day.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WorkshopSchedule;
