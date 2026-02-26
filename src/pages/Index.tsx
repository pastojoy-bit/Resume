import Navbar from "@/components/Navbar";
import { Phone, Mail, MapPin, Briefcase, Clock, Star, Users, CreditCard, ShieldCheck, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Joy Pasto</h1>
          <p className="text-lg md:text-xl font-light opacity-90 mb-6">Customer Service Professional</p>
          <p className="max-w-xl mx-auto text-sm md:text-base opacity-80 mb-8">
            Dependable, hard-working retail professional with 15+ years of experience delivering excellent customer service and efficient POS operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:+19187149854" className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full px-4 py-2">
              <Phone size={16} /> (918) 714-9854
            </a>
            <a href="mailto:joypasto@yahoo.com" className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full px-4 py-2">
              <Mail size={16} /> joypasto@yahoo.com
            </a>
            <span className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
              <MapPin size={16} /> Tulsa / Broken Arrow, OK
            </span>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
          <Separator className="w-16 h-1 bg-accent mb-8 rounded-full" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            With over 15 years of dedicated experience in retail and customer service, I bring a proven track record of reliability, strong work ethic, and genuine care for every customer interaction. My 16-year tenure at Big Lots speaks to my consistency and commitment to doing quality work every single day.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm skilled in point-of-sale operations, payment processing, cash handling, and maintaining organized, welcoming store environments. I take pride in being a team player who can also work independently with minimal supervision.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm currently seeking <strong className="text-foreground">part-time, mid-day shift</strong> opportunities in the Tulsa and Broken Arrow area where I can continue to contribute my skills and experience.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Core Competencies</h2>
          <Separator className="w-16 h-1 bg-accent mb-10 rounded-full mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <Card key={s.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <s.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-base" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Professional Experience</h2>
          <Separator className="w-16 h-1 bg-accent mb-10 rounded-full" />
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-6 border-l-2 border-accent/30">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{job.company}</h3>
                  <Badge variant="secondary" className="text-xs">{job.period}</Badge>
                </div>
                <p className="text-sm text-accent font-medium mb-3 flex items-center gap-1.5">
                  <Briefcase size={14} /> {job.role}
                </p>
                <ul className="space-y-1.5">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <Star size={12} className="mt-1 shrink-0 text-accent/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="py-16 md:py-20 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">References</h2>
          <Separator className="w-16 h-1 bg-accent mb-8 rounded-full mx-auto" />
          <p className="text-muted-foreground italic text-lg">"References available upon request."</p>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm mb-8">
            <a href="tel:+19187149854" className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={16} /> (918) 714-9854
            </a>
            <a href="mailto:joypasto@yahoo.com" className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={16} /> joypasto@yahoo.com
            </a>
            <span className="flex items-center justify-center gap-2">
              <MapPin size={16} /> Tulsa / Broken Arrow, OK
            </span>
          </div>
          <Separator className="bg-primary-foreground/20 mb-6" />
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Joy Pasto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
