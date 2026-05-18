import {
  Mail,
  Send,
  MessageCircle,
  Download,
} from "lucide-react";

import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/50 mt-10">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Download Card */}
        <div className="glass rounded-3xl p-8 sm:p-12 text-center reveal relative overflow-hidden">

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[80%] bg-primary/20 blur-3xl" />

          <div className="relative">

            {/* Logo 1 */}
            <div className="flex justify-center mb-5">
              <div className="h-24 w-24 rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(0,255,255,0.25)]">
                <img
                  src={logo}
                  alt="RideFlow Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold">
              Ready to drive smarter?
            </h3>

            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              Join thousands of drivers using RideFlow to accept rides faster.
            </p>

            <div className="mt-7">
              <a
                href="/app-debug.apk"
                download
                className="glow-pulse inline-flex items-center gap-2 rounded-2xl px-7 py-4 bg-primary text-primary-foreground font-semibold text-base hover:scale-[1.03] transition-transform"
              >
                <Download className="h-5 w-5" />
                Download APK
              </a>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 grid sm:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div>

            <div className="flex items-center gap-3">

              {/* Logo 2 */}
              <div className="h-12 w-12 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <img
                  src={logo}
                  alt="RideFlow Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="font-display font-bold text-lg block">
                  RideFlow Driver
                </span>

                <span className="text-xs text-muted-foreground">
                  Driver Automation
                </span>
              </div>

            </div>

            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Smart auto ride acceptance for Android drivers.
            </p>

          </div>

          {/* Right */}
          <div className="flex sm:justify-end flex-wrap gap-3">

             

            <a
              href="https://t.me/Auto_ride_accept"
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover rounded-xl px-4 py-2.5 text-sm inline-flex items-center gap-2"
            >
              <Send className="h-4 w-4 text-primary" />
              Telegram
            </a>

          

          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RideFlow Driver. All rights reserved.
        </p>

      </div>
    </footer>
  );
}