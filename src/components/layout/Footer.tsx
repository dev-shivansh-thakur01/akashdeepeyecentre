import Link from 'next/link';
import { Eye, Twitter, Facebook, Instagram } from 'lucide-react';
import { navLinks, contactDetails } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Tewarie Eye Centre</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Your vision, our priority. Providing expert eye care for over two decades.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
                <li><Link href="/services/cataract-surgery" className="text-muted-foreground hover:text-primary">Cataract Surgery</Link></li>
                <li><Link href="/services/glaucoma-treatment" className="text-muted-foreground hover:text-primary">Glaucoma Treatment</Link></li>
                <li><Link href="/services/laser-lasik-surgery" className="text-muted-foreground hover:text-primary">LASIK Surgery</Link></li>
                <li><Link href="/services/retinal-care" className="text-muted-foreground hover:text-primary">Retinal Care</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start">{contactDetails.address}</li>
              <li>{contactDetails.phone}</li>
              <li>{contactDetails.email}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t bg-secondary/50">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tewarie Eye Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
