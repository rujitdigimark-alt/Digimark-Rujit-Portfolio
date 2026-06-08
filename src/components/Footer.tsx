import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold">
            DigIT<span className="text-accent">Solutions</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            We deliver high-performance digital marketing, cutting-edge web development, and precision tagging solutions to accelerate your growth.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors text-sm">Home</Link></li>
            <li><Link href="/segments" className="text-gray-400 hover:text-accent transition-colors text-sm">Segments</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2 inline-block">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>+91 9876543210</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>rujit.digimark@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2 inline-block">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors font-bold text-sm">
              in
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors font-bold text-sm">
              𝕏
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors font-bold text-sm">
              ig
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} DigIT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
