import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { InstallSteps } from "@/components/landing/InstallSteps";
import { Features } from "@/components/landing/Features";
import { Screenshots } from "@/components/landing/Screenshots";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { SetupGuideModal } from "@/components/landing/SetupGuideModal";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RideFlow Driver — Smart Auto Ride Acceptance APK" },
      { name: "description", content: "Download RideFlow Driver APK — the smart auto ride acceptance system for Android drivers. Faster responses, more rides, less screen time." },
      { property: "og:title", content: "RideFlow Driver — Smart Auto Ride Acceptance" },
      { property: "og:description", content: "Smart auto ride acceptance APK for Android drivers." },
    ],
  }),
});

function Index() {
  const [guideOpen, setGuideOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen relative">
      <Nav />
      <main>
        <Hero onWatchGuide={() => setGuideOpen(true)} />
        <InstallSteps />
        <Features />
        <Screenshots />
        <Faq />
      </main>
      <Footer />
      <SetupGuideModal open={guideOpen} onOpenChange={setGuideOpen} />
    </div>
  );
}
