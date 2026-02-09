import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Eye, Shield, Star, Quote, ArrowRight } from 'lucide-react';
import halfLogo from "@/assets/images/half_logo.png";
import { services, testimonials, generalFaqs } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProcessJourney } from '@/components/ui/process-journey';
import { FaqSection } from '@/components/ui/faq-section';
import { HeroSection } from '@/components/ui/hero-section';

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonial = testimonials[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={
          <span>
            Clarity in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Sight</span>,<br />
            Quality in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Life</span>
          </span>
        }
        subtitle="Experience advanced vision care with our dedicated team of specialists. We combine cutting-edge technology with compassionate care to restore your vision."
        rightContent={
          /* Visual Element - Premium Glassmorphism Cards */
          <div className="relative w-full h-[500px]">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-72 h-72 bg-accent/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
            </div>

            <ScrollAnimation animation="scale-up" duration={0.8}>
              {/* Decorative orbit ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border-2 border-primary/10" />

              {/* Orbiting process cards container */}
              <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
                {/* Card 1: Consultation (12 o'clock - 0°) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-clockwise" style={{ animationDelay: '0s' }}>
                  <div className="w-48 backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 border-2 border-white/60 dark:border-white/20 rounded-2xl p-4 shadow-2xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-accent to-teal-500 flex items-center justify-center mb-3 shadow-lg text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm mb-1 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Consultation</h3>
                    <p className="text-xs text-muted-foreground">Expert assessment</p>
                  </div>
                </div>

                {/* Card 2: Diagnosis (3 o'clock - 90°) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-clockwise" style={{ animationDelay: '-10s' }}>
                  <div className="w-48 backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 border-2 border-white/60 dark:border-white/20 rounded-2xl p-4 shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-3 shadow-lg text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm mb-1 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Diagnosis</h3>
                    <p className="text-xs text-muted-foreground">Advanced testing</p>
                  </div>
                </div>

                {/* Card 3: Treatment (6 o'clock - 180°) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-clockwise" style={{ animationDelay: '-20s' }}>
                  <div className="w-48 backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 border-2 border-white/60 dark:border-white/20 rounded-2xl p-4 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3 shadow-lg text-white">
                      <Eye size={22} />
                    </div>
                    <h3 className="font-bold text-sm mb-1 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Treatment</h3>
                    <p className="text-xs text-muted-foreground">Precision care</p>
                  </div>
                </div>

                {/* Card 4: AfterCare (9 o'clock - 270°) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-clockwise" style={{ animationDelay: '-30s' }}>
                  <div className="w-48 backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-900/60 border-2 border-white/60 dark:border-white/20 rounded-2xl p-4 shadow-2xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-3 shadow-lg text-white">
                      <Shield size={22} />
                    </div>
                    <h3 className="font-bold text-sm mb-1 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">AfterCare</h3>
                    <p className="text-xs text-muted-foreground">Ongoing support</p>
                  </div>
                </div>
              </div>

              {/* Central logo with enhanced glow - positioned above orbiting cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-accent/20 via-primary/20 to-blue-500/20 flex items-center justify-center shadow-2xl backdrop-blur-sm border-4 border-white/30 dark:border-white/10 animate-glow-pulse">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent blur-xl" />
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <Image
                      src={halfLogo}
                      alt="Akashdeep Eye Centre Logo"
                      width={110}
                      height={110}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        }
      />

      {/* Quick Stats Overlay (Optional - moved from old hero) */}
      <section className="bg-primary text-primary-foreground py-8 relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl flex flex-wrap justify-around items-center gap-4">
        <div className="text-center px-4">
          <h3 className="text-3xl font-bold">20+</h3>
          <p className="text-sm opacity-80 uppercase tracking-wider">Years Exp.</p>
        </div>
        <div className="h-10 w-px bg-white/20 hidden sm:block" />
        <div className="text-center px-4">
          <h3 className="text-3xl font-bold">15k+</h3>
          <p className="text-sm opacity-80 uppercase tracking-wider">Happy Patients</p>
        </div>
        <div className="h-10 w-px bg-white/20 hidden sm:block" />
        <div className="text-center px-4">
          <h3 className="text-3xl font-bold">98%</h3>
          <p className="text-sm opacity-80 uppercase tracking-wider">Success Rate</p>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 md:py-28 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl relative z-10">
                  Welcome to <br />
                  <span className="text-accent">Akashdeep Eye Centre</span>
                </h2>
                <div className="mt-6 space-y-4 text-lg text-muted-foreground relative z-10">
                  <p>
                    For over 20 years, we have been a beacon of optical health in the community. Our commitment is to provide personalized, state-of-the-art eye care in a welcoming and professional environment.
                  </p>
                  <p>
                    We believe in empowering our patients through education and providing them with the best possible outcomes. From routine check-ups to complex surgeries, your vision is our priority.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild variant="link" className="px-0 text-lg text-accent group">
                    <Link href="/about" className="flex items-center">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left" delay={0.2}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={PlaceHolderImages.find(img => img.id === 'clinic-interior')?.imageUrl ?? ''}
                  alt="Interior of the Akashdeep Eye Centre"
                  data-ai-hint="clinic interior"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-background pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[80px]" />
        </div>

        <div className="container relative mx-auto px-4 md:px-6">
          <ScrollAnimation animation="fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Our Specialized Services</h2>
              <Separator className="bg-gradient-to-r from-transparent via-accent to-transparent w-48 h-[2px] mx-auto mt-6" />
              <p className="mt-6 text-lg text-muted-foreground">
                We offer a comprehensive range of services using the latest technology to treat various eye conditions with precision and care.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, idx) => {
              const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <ScrollAnimation key={service.id} animation="slide-up" delay={idx * 0.1}>
                  <Card className="flex flex-col h-full overflow-hidden border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group hover:bg-white/10">
                    <CardHeader className="relative h-48 w-full p-0 overflow-hidden">
                      <Image
                        src={serviceImage?.imageUrl ?? ''}
                        alt={serviceImage?.description ?? service.title}
                        data-ai-hint={serviceImage?.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    </CardHeader>
                    <CardContent className="flex-grow pt-6 px-6">
                      <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3 text-muted-foreground">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="pb-6 px-6">
                      <Button asChild variant="ghost" className="w-full justify-between hover:bg-accent/10 hover:text-accent group/btn p-0 h-auto">
                        <Link href={`/services/${service.slug}`}>
                          <span className="font-semibold text-foreground group-hover/btn:text-accent transition-colors">Learn More</span>
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <ScrollAnimation animation="scale-up" delay={0.3}>
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 border-none">
                <Link href="/services">View All Services</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Journey Section (New) */}
      <ProcessJourney />

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation animation="fade-in">
            <h2 className="text-3xl font-bold text-center text-foreground md:text-4xl mb-16">Why Choose Akashdeep?</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all hover:-translate-y-1 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent shadow-inner">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Expert Care</h3>
                <p className="text-muted-foreground leading-relaxed">Board-certified ophthalmologists with decades of combined experience in treating complex eye conditions.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all hover:-translate-y-1 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent shadow-inner">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Advanced Technology</h3>
                <p className="text-muted-foreground leading-relaxed">Equipped with the latest diagnostic and surgical technology to ensure the best possible outcomes for our patients.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all hover:-translate-y-1 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent shadow-inner">
                  <span className="font-bold text-xl">20+</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Years of Trust</h3>
                <p className="text-muted-foreground leading-relaxed">Serving the community with integrity and providing quality eye care services for over 20 years.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-3xl font-bold mb-12">Patient Testimonials</h2>
            <div className="inline-block p-4 rounded-full bg-white/5 mb-8 backdrop-blur-md border border-white/10">
              <Quote className="mx-auto h-8 w-8 text-accent" />
            </div>
            <blockquote className="text-2xl font-light italic leading-relaxed md:text-3xl text-gray-200">
              {`"${featuredTestimonial.quote}"`}
            </blockquote>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center">
              <div className="relative group">
                <Avatar className="h-24 w-24 border-4 border-white/10 shadow-2xl transition-transform group-hover:scale-105">
                  <AvatarImage src={PlaceHolderImages.find(p => p.id === featuredTestimonial.imageId)?.imageUrl} alt={featuredTestimonial.name} data-ai-hint="portrait person" />
                  <AvatarFallback className="bg-gradient-to-br from-accent to-blue-600 text-white text-2xl">{featuredTestimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <p className="mt-6 font-bold text-xl tracking-wide text-white">{featuredTestimonial.name}</p>
              <div className="mt-2 flex space-x-1">
                {[...Array(featuredTestimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />)}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section (New) */}
      <FaqSection items={generalFaqs} />

      {/* CTA Section */}
      <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
        <ScrollAnimation animation="slide-up">
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/40 rounded-full blur-3xl animate-pulse delay-1000" />

            <h2 className="text-3xl font-bold md:text-5xl relative z-10 mb-6">Ready to See the World More Clearly?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300 relative z-10 mb-10 leading-relaxed">
              Your journey to better vision starts here. Don't let vision problems hold you back. Schedule your personalized consultation with our experts today.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg rounded-full">
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 h-14 px-8 text-lg rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
