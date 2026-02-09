import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { services, serviceFaqs, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ArrowRight, Star, Quote, Eye, Shield } from 'lucide-react';
import { ProcessJourney } from '@/components/ui/process-journey';
import { FaqSection } from '@/components/ui/faq-section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Akashdeep Eye Centre',
  description: 'Explore our comprehensive eye care services, including Cataract, LASIK, Glaucoma treatment, and more. Advanced technology for your vision.',
};

export default function ServicesPage() {
  const featuredTestimonial = testimonials[1] || testimonials[0];

  return (
    <div>
      <HeroSection
        title="Our Specialized Eye Care Services"
        subtitle="We offer a comprehensive range of advanced treatments to address all your vision needs. Explore our services to find out how we can help you see the world better."
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
        rightContent={
          <div className="relative w-full h-[450px] flex items-center justify-center">
            {/* Ambient glow background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>

            <ScrollAnimation animation="scale-up">
              <div className="relative w-80 h-80">
                {/* Orbit ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-primary/10" />

                {/* Orbiting service icons container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Shield - Safety (12 o'clock - 0°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '0s' }}>
                    <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl p-4 rounded-2xl shadow-xl border-2 border-white/50 dark:border-white/20 hover:scale-110 transition-transform">
                      <Shield className="w-10 h-10 text-accent" />
                    </div>
                  </div>

                  {/* Star - Excellence (3 o'clock - 90°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-10s' }}>
                    <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl p-4 rounded-2xl shadow-xl border-2 border-white/50 dark:border-white/20 hover:scale-110 transition-transform">
                      <Star className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* ArrowRight - Progress (6 o'clock - 180°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-20s' }}>
                    <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl p-4 rounded-2xl shadow-xl border-2 border-white/50 dark:border-white/20 hover:scale-110 transition-transform">
                      <ArrowRight className="w-10 h-10 text-blue-500" />
                    </div>
                  </div>

                  {/* Quote - Trust (9 o'clock - 270°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-30s' }}>
                    <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl p-4 rounded-2xl shadow-xl border-2 border-white/50 dark:border-white/20 hover:scale-110 transition-transform">
                      <Quote className="w-10 h-10 text-teal-500" />
                    </div>
                  </div>
                </div>

                {/* Central medical icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/40 dark:border-white/20 z-10 animate-glow-pulse">
                    <Eye className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        }
      />

      <section className="container mx-auto py-20 md:py-28 relative">
        <ScrollAnimation animation="fade-in">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <h2 className="text-3xl font-bold tracking-tight text-center mb-16 md:text-4xl">Comprehensive Treatments</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
            return (
              <ScrollAnimation key={service.id} animation="slide-up" delay={idx * 0.1}>
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border-muted bg-background/50 backdrop-blur-sm">
                  <CardHeader className="relative h-64 w-full p-0 overflow-hidden">
                    {serviceImage && (
                      <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        data-ai-hint={serviceImage.imageHint}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
                        <service.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-8 px-6">
                    <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">{service.longDescription}</CardDescription>

                    {/* Quick Benefits (Optional small list) */}
                    <ul className="mt-4 space-y-2">
                      {service.benefits?.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-foreground/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                  </CardContent>
                  <CardFooter className="pb-8 px-6">
                    <Button asChild variant="default" className="w-full group/btn bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </section>

      {/* Process Journey */}
      <ProcessJourney />

      {/* Testimonials */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <ScrollAnimation animation="scale-up">
            <div className="inline-block p-4 rounded-full bg-white/5 mb-8 backdrop-blur-md border border-white/10">
              <Quote className="mx-auto h-8 w-8 text-accent" />
            </div>
            <blockquote className="text-2xl font-light italic leading-relaxed md:text-3xl text-gray-200">
              "{featuredTestimonial.quote}"
            </blockquote>
            <div className="mt-10 flex flex-col items-center justify-center">
              <Avatar className="h-20 w-20 border-4 border-white/10 shadow-xl mb-4">
                <AvatarImage src={PlaceHolderImages.find(p => p.id === featuredTestimonial.imageId)?.imageUrl} />
                <AvatarFallback className="bg-accent text-white">{featuredTestimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="font-bold text-xl">{featuredTestimonial.name}</p>
              <div className="mt-2 flex space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection items={serviceFaqs} title="Common Questions About Our Services" />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Vision?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Don't let vision problems hold you back. Schedule your personalized consultation today.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 h-12 rounded-full font-bold">
                <Link href="/booking">Book Appointment</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
