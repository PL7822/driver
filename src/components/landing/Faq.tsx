import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ShieldCheck,
  Download,
  Accessibility,
  Settings2,
} from "lucide-react";

const faqs = [
  {
    icon: Download,
    q: "How do I install the APK?",
    a: "Download the APK from this page, open Android Settings → Security and enable 'Install Unknown Apps' for your browser, then tap the downloaded file to install RideFlow Driver.",
  },

  {
    icon: Accessibility,
    q: "Why is Accessibility permission needed?",
    a: "RideFlow Driver uses Accessibility services to detect and accept ride requests on your behalf inside your driver app. Without it, automatic ride handling cannot function.",
  },

  {
    icon: ShieldCheck,
    q: "Is RideFlow Driver secure?",
    a: "Yes. All automation runs locally on your device. We do not collect personal data, ride info, or send anything to external servers without your consent.",
  },

  {
    icon: Settings2,
    q: "How do I enable permissions?",
    a: "Go to Settings → Accessibility → Installed Services → RideFlow Driver, then toggle ON the two listed permissions. The app will guide you through it on first launch.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 reveal">
          
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            FAQ
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Questions,{" "}
            <span className="text-gradient">answered</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about installation,
            permissions, security and RideFlow Driver setup.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="glass rounded-3xl border border-white/10 p-2 sm:p-4 reveal shadow-2xl">

          <Accordion type="single" collapsible className="w-full">
            
            {faqs.map((f, i) => {
              const Icon = f.icon;

              return (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border/40"
                >

                  <AccordionTrigger className="group px-4 py-5 hover:no-underline">
                    
                    <div className="flex items-center gap-4 text-left">

                      <div className="h-11 w-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <span className="font-display text-base sm:text-lg font-semibold group-hover:text-primary transition-colors">
                        {f.q}
                      </span>

                    </div>

                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-5">
                    
                    <div className="pl-[60px] text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {f.a}
                    </div>

                  </AccordionContent>

                </AccordionItem>
              );
            })}

          </Accordion>

        </div>
      </div>
    </section>
  );
}