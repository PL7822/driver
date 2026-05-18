import { Download, PlayCircle, ShieldAlert } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

interface HeroProps {
  onWatchGuide: () => void;
}

export function Hero({ onWatchGuide }: HeroProps) {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary glow-pulse" />
            v2.4 · Android APK Available
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            RideFlow
            <br />
            <span className="text-gradient">Driver</span>
          </h1>
          <p className="mt-5 text-xl text-foreground/90 font-display">
            Smart Auto Ride Acceptance System
          </p>
          <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
            Accept rides milliseconds after they appear. Built for drivers who want
            fewer missed trips, less screen time, and more earnings — all powered by
            intelligent on-device automation.
          </p>

          <div id="download" className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="app-debug.apk"
              download
              className="glow-pulse inline-flex items-center gap-2 rounded-2xl px-7 py-4 bg-primary text-primary-foreground font-semibold text-base hover:scale-[1.03] transition-transform"
            >
              <Download className="h-5 w-5" />
              Download APK
            </a>
            <button
              onClick={onWatchGuide}
              className="glass glass-hover inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-medium text-sm"
            >
              <PlayCircle className="h-5 w-5 text-primary" />
              Watch Setup Guide
            </button>
          </div>

          <div className="mt-8 glass rounded-2xl p-4 flex items-start gap-3 border-l-2 border-primary/70">
            <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Accessibility permission required.</span>{" "}
              Needed for automatic ride handling features.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={phoneMockup}
            alt="RideFlow Driver app dashboard preview"
            width={1024}
            height={1280}
            className="relative float max-w-md w-full drop-shadow-[0_30px_60px_oklch(0.72_0.2_240_/_0.4)]"
          />
        </div>
      </div>
    </section>
  );
}
