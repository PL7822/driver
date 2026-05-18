import { Download, Settings, Smartphone, Accessibility, ToggleRight, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Download, title: "Download the APK", desc: "Tap the Download APK button and save the file to your device." },
  { icon: Settings, title: "Open Android Settings", desc: "Go to Security or Privacy and enable 'Install Unknown Apps' or 'Allow from this source'." },
  { icon: Smartphone, title: "Install the App", desc: "Open the downloaded APK and tap Install to add RideFlow Driver." },
  { icon: Accessibility, title: "Open Accessibility Settings", desc: "Navigate to Accessibility, find 'RideFlow Driver' and open its permissions page." },
  { icon: ToggleRight, title: "Enable Permissions", desc: "Toggle ON both Accessibility permissions required by the app." },
  { icon: CheckCircle2, title: "Complete Setup", desc: "Return to the app and finish onboarding — you're ready to drive." },
];

export function InstallSteps() {
  return (
    <section id="install" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Installation</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Setup in <span className="text-gradient">six steps</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A guided timeline to get RideFlow Driver running on your Android device.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-x-16 lg:gap-y-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const offset = i % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:mt-16";
              return (
                <div key={i} className={`reveal ${offset}`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="glass glass-hover rounded-2xl p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 grid place-items-center border border-primary/40">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-primary text-primary-foreground rounded-full h-6 w-6 grid place-items-center shadow-[var(--shadow-neon)]">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
