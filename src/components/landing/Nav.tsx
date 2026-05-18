import { Download } from "lucide-react";
import logo from "@/assets/logo.png";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        
        <nav className="glass rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3">

          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.25)]">
              <img
                src={logo}
                alt="RideFlow Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-lg text-white">
                RideFlow
              </span>

              <span className="text-[11px] text-muted-foreground">
                Driver Automation
              </span>
            </div>

          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#install" className="hover:text-foreground transition">
              Install
            </a>

            <a href="#features" className="hover:text-foreground transition">
              Features
            </a>

            <a href="#screens" className="hover:text-foreground transition">
              Screens
            </a>

            <a href="#faq" className="hover:text-foreground transition">
              FAQ
            </a>
          </div>

          {/* Download Button */}
          <a
            href="/app-debug.apk"
            download
            className="glow-pulse inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:scale-[1.03] transition-transform"
          >
            <Download className="h-5 w-5" />
            Download APK
          </a>

        </nav>
      </div>
    </header>
  );
}