import Link from 'next/link';
import { Twitter, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { navLinks, contactDetails } from '@/lib/data';
import Image from "next/image";

import halfLogo from "@/assets/images/half_logo.png";

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-accent/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={halfLogo}
                alt="Akashdeep Eye Centre"
                width={70}
                height={70}
                className="brightness-110"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Akashdeep Eye Centre</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Your vision, our priority. Providing expert eye care with state-of-the-art technology and compassionate service for over two decades.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="bg-background/50 p-2.5 rounded-full text-foreground/70 transition-all hover:bg-accent hover:text-white hover:scale-110 shadow-sm"><Twitter size={18} /></Link>
              <Link href="#" className="bg-background/50 p-2.5 rounded-full text-foreground/70 transition-all hover:bg-accent hover:text-white hover:scale-110 shadow-sm"><Facebook size={18} /></Link>
              <Link href="#" className="bg-background/50 p-2.5 rounded-full text-foreground/70 transition-all hover:bg-accent hover:text-white hover:scale-110 shadow-sm"><Instagram size={18} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block text-foreground">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-accent hover:translate-x-1 inline-block">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block text-foreground">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/cataract-surgery" className="text-muted-foreground transition-colors hover:text-accent hover:translate-x-1 inline-block">Cataract Surgery</Link></li>
              <li><Link href="/services/glaucoma-treatment" className="text-muted-foreground transition-colors hover:text-accent hover:translate-x-1 inline-block">Glaucoma Treatment</Link></li>
              <li><Link href="/services/laser-lasik-surgery" className="text-muted-foreground transition-colors hover:text-accent hover:translate-x-1 inline-block">LASIK Surgery</Link></li>
              <li><Link href="/services/retinal-care" className="text-muted-foreground transition-colors hover:text-accent hover:translate-x-1 inline-block">Retinal Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block text-foreground">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <span>{contactDetails.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <span className="break-all">{contactDetails.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span>123 Eye Drive, Vision City, VC 54321</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Akashdeep Eye Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
