import Link from "next/link";
import { ArrowRight, ShoppingCart, Briefcase, Stethoscope, Building2, GraduationCap } from "lucide-react";

export default function SegmentsPage() {
  const segments = [
    {
      title: "E-Commerce",
      icon: <ShoppingCart className="w-10 h-10 text-white" />,
      description: "Drive sales, optimize conversion rates, and build customer loyalty with tailored e-commerce digital strategies.",
      color: "bg-blue-600",
    },
    {
      title: "B2B Tech & SaaS",
      icon: <Briefcase className="w-10 h-10 text-white" />,
      description: "Generate high-quality leads and lower CAC with advanced targeting and content-driven campaigns.",
      color: "bg-purple-600",
    },
    {
      title: "Healthcare",
      icon: <Stethoscope className="w-10 h-10 text-white" />,
      description: "HIPAA-compliant marketing strategies that build trust and increase patient acquisition.",
      color: "bg-emerald-600",
    },
    {
      title: "Real Estate",
      icon: <Building2 className="w-10 h-10 text-white" />,
      description: "Showcase properties effectively and capture motivated buyers through hyper-local digital campaigns.",
      color: "bg-orange-600",
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      description: "Boost enrollment and student engagement with targeted advertising and seamless web experiences.",
      color: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-600">
            We don't believe in one-size-fits-all. Our digital marketing and web solutions are custom-engineered for the unique challenges of your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-32 ${segment.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                {segment.icon}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">{segment.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {segment.description}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors">
                  Discuss your industry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-navy rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Don't see your industry?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Our agile framework allows us to adapt and thrive in any market. Contact us to discuss a custom strategy for your niche.
          </p>
          <Link href="/contact" className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all relative z-10">
            Schedule a Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}
