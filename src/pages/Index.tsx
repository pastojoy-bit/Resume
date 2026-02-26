import Navbar from "@/components/Navbar";
import { Phone, Mail, MapPin, Briefcase, Clock, Star, Users, CreditCard, ShieldCheck, RefreshCw, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useReveal } from "@/hooks/useReveal";

const skills = [
  { icon: CreditCard, title: "POS Operations", desc: "16+ years operating point-of-sale systems with speed and accuracy" },
  { icon: ShieldCheck, title: "Payment Processing", desc: "Expert handling of cash, credit, debit, and digital payments" },
  { icon: Users, title: "Customer Service", desc: "Friendly, patient interactions that keep customers coming back" },
  { icon: Clock, title: "Reliability", desc: "Consistent attendance and dependability over a 16-year tenure" },
  { icon: RefreshCw, title: "Adaptability", desc: "Quick learner who thrives in fast-paced retail environments" },
];

const experience = [
  {
    company: "Big Lots",
    role: "Cashier / Customer Service Associate",
    period: "June 2008 – February 2025",
    highlights: [
      "Delivered exceptional customer service for over 16 years",
      "Processed high-volume transactions accurately using POS systems",
      "Handled cash, credit/debit cards, and various payment methods",
      "Maintained a clean, organized checkout area",
      "Assisted with stocking, merchandising, and store upkeep",
      "Trained and mentored new cashiers",
    ],
  },
  {
    company: "Dollar Tree",
    role: "Cashier",
    period: "November 2017 – May 2018",
    highlights: [
      "Operated registers efficiently in a fast-paced environment",
      "Provided friendly, attentive customer service",
      "Assisted with restocking shelves and maintaining store appearance",
    ],
  },
];

function RevealSection({ children, className = "", stagger = false }: { children: React.ReactNode; className?: string; stagger?: boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-primary-foreground">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-foreground/70 mb-6">
            Customer Service Professional
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Joy Pasto
          </h1>
          <p className="typing-cursor text-lg md:text-xl font-light opacity-80 mb-10 max-w-lg mx-auto">
            15+ years of dedicated retail experience
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm mb-12">
            <a href="tel:+19187149854" className="glass rounded-full px-5 py-2.5 flex items-center gap-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <Phone size={15} /> (918) 714-9854
            </a>
            <a href="mailto:pastojoy@gmail.com" className="glass rounded-full px-5 py-2.5 flex items-center gap-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <Mail size={15} /> pastojoy@gmail.com
            </a>
            <span className="glass rounded-full px-5 py-2.5 flex items-center gap-2 text-primary-foreground">
              <MapPin size={15} /> Tulsa / Broken Arrow, OK
            </span>
          </div>

          <a href="#about" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <ArrowDown size={14} className="animate-bounce" /> Scroll to learn more
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Dedicated & Dependable</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of dedicated experience in retail and customer service, I bring a proven track record of reliability, strong work ethic, and genuine care for every customer interaction. My 16-year tenure at Big Lots speaks to my consistency and commitment to doing quality work every single day.
              </p>
              <p>
                I'm skilled in point-of-sale operations, payment processing, cash handling, and maintaining organized, welcoming store environments. I take pride in being a team player who can also work independently with minimal supervision.
              </p>
              <p>
                I'm currently seeking <strong className="text-foreground font-semibold">part-time, mid-day shift</strong> opportunities in the Tulsa and Broken Arrow area where I can continue to contribute my skills and experience.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 md:py-28 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 text-center">What I Bring</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Core Competencies</h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skills.map((s) => (
                <Card key={s.title} className="group border border-border/50 bg-card/80 backdrop-blur-sm shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <s.icon size={22} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1.5">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Career History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Professional Experience</h2>
          </RevealSection>
          <div className="space-y-10">
            {experience.map((job) => (
              <RevealSection key={job.company}>
                <div className="relative pl-7 border-l-2 border-accent/20">
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-background" />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                    <Badge variant="secondary" className="text-xs font-medium">{job.period}</Badge>
                  </div>
                  <p className="text-sm text-accent font-medium mb-4 flex items-center gap-1.5">
                    <Briefcase size={14} /> {job.role}
                  </p>
                  <ul className="space-y-2">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2.5">
                        <Star size={12} className="mt-1 shrink-0 text-accent/50" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="py-20 md:py-28 bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">References</h2>
            <p className="text-muted-foreground italic text-lg">"References available upon request."</p>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-sm opacity-60 mb-8">I'd love to hear about opportunities in the Tulsa area.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm mb-10">
            <a href="tel:+19187149854" className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
              <Phone size={16} /> (918) 714-9854
            </a>
            <a href="mailto:pastojoy@gmail.com" className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
              <Mail size={16} /> pastojoy@gmail.com
            </a>
            <span className="flex items-center justify-center gap-2 opacity-70">
              <MapPin size={16} /> Tulsa / Broken Arrow, OK
            </span>
          </div>
          <Separator className="bg-primary-foreground/10 mb-6" />
          <p className="text-xs opacity-40">© {new Date().getFullYear()} Joy Pasto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
