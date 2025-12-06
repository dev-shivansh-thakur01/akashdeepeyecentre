"use client";

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Eye, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import * as React from "react";
import halfLogo from "@/assets/images/full_logo.png";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
      src={halfLogo}
    alt="Akashdeep Eye Centre"
     width={120}
        height={120}
    priority
  />
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground',
                pathname === link.href ? 'bg-accent text-accent-foreground' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/booking">Book Appointment</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <Eye className="h-6 w-6 text-primary" />
                <span className="font-bold">Akashdeep Eye Centre</span>
              </Link>
              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                        'text-lg',
                        pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/booking" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
