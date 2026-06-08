"use client";

import { useState } from "react";
import { Phone, MessageCircle, Activity, X } from "lucide-react";

export default function CTAButtons() {
  const [showModal, setShowModal] = useState(false);
  const [isGtmActive, setIsGtmActive] = useState(false);

  const phoneNumber = "+919876543210";
  const message = encodeURIComponent("Hi DigIT Solutions, I would like to know more about your services.");

  const checkGtmStatus = () => {
    // Check if the GTM object is initialized on the window, 
    // proving the script successfully loaded via /gtgmetric/
    if (typeof window !== 'undefined' && (window as any).google_tag_manager) {
      setIsGtmActive(true);
    } else {
      setIsGtmActive(false);
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* GTG Check Button */}
        <button
          onClick={checkGtmStatus}
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
          title="Check Google Tag Gateway"
          aria-label="Check GTG Status"
        >
          <Activity className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

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

      {/* GTG Status Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl relative animate-in zoom-in-95">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center pt-2">
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${isGtmActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <Activity className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Google Tag Gateway</h3>
              <p className="text-gray-600 text-lg">
                Your Google Tag Gateway is:<br/>
                <span className={`font-black text-3xl inline-block mt-3 tracking-wide uppercase ${isGtmActive ? 'text-green-600' : 'text-red-600'}`}>
                  {isGtmActive ? 'Active' : 'Inactive'}
                </span>
              </p>
              {!isGtmActive && (
                <p className="text-sm text-gray-500 mt-6 bg-gray-50 p-4 rounded-xl border border-gray-100 text-left leading-relaxed">
                  <strong>Note:</strong> Ensure you don't have an adblocker running, and that your server-side <code className="bg-gray-200 px-1 rounded text-gray-700">/gtgmetric/</code> proxy is properly responding with the GTM script.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
