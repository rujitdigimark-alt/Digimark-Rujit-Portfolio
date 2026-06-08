import { Phone, MessageCircle } from "lucide-react";

export default function CTAButtons() {
  const phoneNumber = "+919876543210";
  const message = encodeURIComponent("Hi DigIT Solutions, I would like to know more about your services.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-navy hover:bg-navy-light text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 group-hover:animate-pulse" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
