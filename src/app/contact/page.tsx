import Image from 'next/image';
import { HeroSection } from '@/components/ui/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { locations, contactDetails, contactFaqs } from '@/lib/data';
import { FaqSection } from '@/components/ui/faq-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, MapPin, Clock, Calendar, Car, Bus } from 'lucide-react';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Akashdeep Eye Centre',
  description: 'Get in touch with Akashdeep Eye Centre. Find our location, contact details, and book your appointment today.',
};

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help. Reach out to us for any inquiries or to schedule an appointment. Your vision is our priority."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
        rightContent={
          <div className="relative w-full h-[450px] flex items-center justify-center">
            {/* Gradient background glow */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-56 h-56 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>

            <ScrollAnimation animation="scale-up">
              <div className="relative w-80 h-80">
                {/* Orbit ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-primary/10" />

                {/* Orbiting contact method icons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Phone - Call (12 o'clock - 0°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '0s' }}>
                    <div className="group p-6 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/50 dark:border-white/20 flex flex-col items-center hover:scale-110 hover:shadow-accent/30 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-teal-500 flex items-center justify-center mb-2 shadow-lg group-hover:animate-glow-pulse">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-foreground">Call</span>
                    </div>
                  </div>

                  {/* MapPin - Visit (3 o'clock - 90°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-10s' }}>
                    <div className="group p-6 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/50 dark:border-white/20 flex flex-col items-center hover:scale-110 hover:shadow-primary/30 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-2 shadow-lg group-hover:animate-glow-pulse">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-foreground">Visit</span>
                    </div>
                  </div>

                  {/* Mail - Email (6 o'clock - 180°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-20s' }}>
                    <div className="group p-6 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/50 dark:border-white/20 flex flex-col items-center hover:scale-110 hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-2 shadow-lg group-hover:animate-glow-pulse">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-foreground">Email</span>
                    </div>
                  </div>

                  {/* Calendar - Book (9 o'clock - 270°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-30s' }}>
                    <div className="group p-6 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/50 dark:border-white/20 flex flex-col items-center hover:scale-110 hover:shadow-teal-500/30 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-2 shadow-lg group-hover:animate-glow-pulse">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-foreground">Book</span>
                    </div>
                  </div>
                </div>

                {/* Central contact icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 dark:border-white/20 z-10 animate-glow-pulse">
                    <svg className="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        }
      />

      {/* Locations Cards */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Locations</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                We have several clinics to serve you. Find the one nearest to you.
              </p>
            </div>
          </ScrollAnimation>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {locations.map((location, idx) => (
              <ScrollAnimation key={location.name} animation="scale-up" delay={idx * 0.1}>
                <Card className="flex flex-col text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full border-muted bg-background">
                  <CardHeader>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-4">
                      <MapPin className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{location.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-8">
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xs mx-auto">{location.address}</p>
                    <Button asChild variant="outline" className="mt-6 border-primary/20 hover:border-primary text-primary">
                      <Link href={contactDetails.mapLink} target="_blank">View on Google Maps</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Main Info Section (Map + Contact + Hours) */}
      <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Hours */}
          <div className="space-y-12">
            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-6 group">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Phone</h3>
                      <p className="text-muted-foreground text-lg mb-1">Mon-Sat from 9am to 6pm</p>
                      <a href={`tel:${contactDetails.phone}`} className="text-xl font-semibold text-accent hover:underline">{contactDetails.phone}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-6 group">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground text-lg mb-1">We typically reply within 24 hours</p>
                      <a href={`mailto:${contactDetails.email}`} className="text-xl font-semibold text-accent hover:underline text-balance break-all">{contactDetails.email}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={0.2}>
              <Card className="border-muted shadow-lg bg-slate-50 dark:bg-slate-900/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="h-6 w-6 text-accent" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-3 border-b border-muted last:border-0 last:pb-0">
                      <span className="font-medium text-muted-foreground">Monday - Friday</span>
                      <span className="font-bold text-foreground">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center pb-3 border-b border-muted last:border-0 last:pb-0">
                      <span className="font-medium text-muted-foreground">Saturday</span>
                      <span className="font-bold text-foreground">9:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">Sunday</span>
                      <span className="font-bold text-destructive">Closed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Map & Getting Here */}
          <div className="space-y-8">
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-muted group">
                {mapImage && (
                  <Link href={contactDetails.mapLink} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={mapImage.imageUrl}
                      alt="Map to Akashdeep Eye Centre"
                      data-ai-hint={mapImage.imageHint}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 text-black px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Open in Google Maps
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={0.3}>
              <div className="flex gap-6 justify-center">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Car className="h-4 w-4" />
                  <span>Ample Parking Available</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Bus className="h-4 w-4" />
                  <span>Near Bus Station</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection items={contactFaqs} title="Frequently Asked Questions" />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              If you are experiencing an eye emergency, please do not hesitate to call our emergency line or visit our clinic immediately.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 h-12 rounded-full font-bold">
              <a href={`tel:${contactDetails.phone}`}>Call Us: {contactDetails.phone}</a>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
