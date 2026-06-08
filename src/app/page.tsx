import Link from "next/link";
import { ArrowRight, Code, Target, BarChart, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8 text-accent" />,
      description: "Custom, high-performance websites built for speed, SEO, and conversions.",
      benefits: ["Modern Tech Stack", "Responsive Design", "SEO Optimized"],
    },
    {
      title: "Campaign Management",
      icon: <Target className="w-8 h-8 text-accent" />,
      description: "Data-driven marketing campaigns that deliver measurable ROI and scale.",
      benefits: ["Google & Meta Ads", "A/B Testing", "Conversion Tracking"],
    },
    {
      title: "Tagging Solutions",
      icon: <BarChart className="w-8 h-8 text-accent" />,
      description: "Advanced analytics and pixel implementation to track every user interaction.",
      benefits: ["GTM Setup", "Server-side Tracking", "Custom Events"],
    },
  ];

  const clients = [
    "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Apple", "Spotify", "Adobe"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Digital Excellence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                Data-Driven Growth.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              We transform your digital presence into a high-performing growth engine. Partner with DigIT Solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Get a Free Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/segments" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                Explore Segments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">What We Do</h2>
            <h3 className="text-4xl font-bold text-navy mb-6">Our Core Services</h3>
            <p className="text-gray-600 text-lg">Comprehensive digital solutions engineered for maximum impact and measurable results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-accent/20 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="mb-6 inline-block p-4 bg-gray-50 rounded-xl group-hover:bg-white transition-colors relative z-10">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4 relative z-10">{service.title}</h4>
                <p className="text-gray-600 mb-8 relative z-10 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
                
                {/* Reveal on hover */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out relative z-10">
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-accent" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section (Marquee) */}
      <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-400">Trusted by innovative companies worldwide</h3>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
            {clients.map((client, index) => (
              <span key={index} className="text-4xl md:text-5xl font-bold text-gray-200 uppercase tracking-widest px-8">
                {client}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
            {clients.map((client, index) => (
              <span key={index} className="text-4xl md:text-5xl font-bold text-gray-200 uppercase tracking-widest px-8">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
