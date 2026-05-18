import { Bot, Zap, HeartHandshake, MousePointerClick, Lock, Activity } from "lucide-react";

const features = [
  { icon: Bot, title: "Auto Ride Accept", desc: "On-device intelligence accepts qualifying rides the instant they appear." },
  { icon: Zap, title: "Fast Response", desc: "Sub-second reaction time keeps you ahead of competing drivers." },
  { icon: HeartHandshake, title: "Driver Friendly", desc: "Designed by drivers for drivers — calm UI, clear controls." },
  { icon: MousePointerClick, title: "Simple Controls", desc: "One toggle to start, one to stop. No complicated menus." },
  { icon: Lock, title: "Secure Access", desc: "Permissions are scoped; nothing leaves your phone without consent." },
  { icon: Activity, title: "Real-time Monitoring", desc: "Live status of rides, response time and earnings at a glance." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Built to <span className="text-gradient">earn more</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="glass glass-hover rounded-2xl p-6 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
