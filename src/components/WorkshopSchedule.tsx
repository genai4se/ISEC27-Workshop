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

    <section id="format" className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Format
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tentative schedule for the full-day workshop with invited talks,
            accepted papers, hands-on sessions, and panel discussions.
          </p>
        </div>

        <div className="space-y-8">
          {schedule.map((day) => (
            <Card
              key={day.day}
              className="overflow-hidden border-2 border-primary/10"
            >
              <div className="bg-gradient-hero p-6 text-white">
                <h3 className="text-2xl font-bold">{day.day}</h3>
                <p className="text-white/90 text-lg mt-1">{day.title}</p>
              </div>

              <div className="p-6 space-y-4">
                {day.sessions.map((session) => (
                  <div
                    key={session.time}
                    className="flex gap-4 rounded-lg p-4 transition-colors hover:bg-primary/5"
                  >
                    <div className="flex min-w-[140px] items-center gap-2 font-semibold text-primary">
                      <Clock className="h-5 w-5 flex-shrink-0" />
                      <span>{session.time}</span>
                    </div>

                    <div className="flex-1">
                      <p className="font-medium text-card-foreground">
                        {session.topic}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
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
