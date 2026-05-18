import dashboardImg from "@/assets/dashboard.jpg";
import filterImg from "@/assets/filter.jpg";
import premiumImg from "@/assets/premium.jpg";

const screens = [
  {
    title: "Live Dashboard",
    caption: "Active rides & response stats",
    image: dashboardImg,
  },
  {
    title: "Auto Accept Engine",
    caption: "Configure filters & rules",
    image: filterImg,
  },
  {
    title: "Premium Access",
    caption: "Unlock advanced driver features",
    image: premiumImg,
  },
];

export function Screenshots() {
  return (
    <section id="screens" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Screenshots
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            A glimpse <span className="text-gradient">inside</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore the premium RideFlow Driver interface with smart automation,
            instant ride handling and real-time driver tools.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="glass glass-hover rounded-3xl p-5">
                
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border group">
                  
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-4 inset-x-4 flex items-center justify-between text-[10px] text-white/80">
                    <span>9:41</span>
                    <span>● ● ●</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-white font-bold text-lg">
                      {s.title}
                    </h3>

                    <p className="text-white/70 text-sm mt-1">
                      {s.caption}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}