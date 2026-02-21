import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { team, aboutPageStats, generalFaqs } from '@/lib/data';
import { FaqSection } from '@/components/ui/faq-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Heart, Activity, Lightbulb, History } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Akashdeep Eye Centre',
  description: 'Learn about our history, mission, and the expert team behind Akashdeep Eye Centre. Over 20 years of excellence in eye care.',
};

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        title="About Akashdeep Eye Centre"
        subtitle="Dedicated to preserving and enhancing the gift of sight for over 20 years. We combine medical expertise with a human touch."
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
        rightContent={
          <div className="relative w-full h-[450px] flex items-center justify-center">
            {/* Enhanced background glow with multiple layers */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000" />
            </div>

            <ScrollAnimation animation="scale-up">
              <div className="relative w-96 h-96">
                {/* Enhanced orbit ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-primary/10" />

                {/* Orbiting value icons container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Heart icon - Compassion (12 o'clock - 0°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '0s' }}>
                    <div className="bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-800/95 dark:to-slate-900/80 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border-2 border-white/60 dark:border-white/20 hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <Heart className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* History icon - Legacy (4 o'clock - 120°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-13.33s' }}>
                    <div className="bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-800/95 dark:to-slate-900/80 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border-2 border-white/60 dark:border-white/20 hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <History className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Lightbulb icon - Innovation (8 o'clock - 240°) */}
                  <div className="absolute animate-orbit-clockwise" style={{ animationDelay: '-26.67s' }}>
                    <div className="bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-800/95 dark:to-slate-900/80 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border-2 border-white/60 dark:border-white/20 hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <Lightbulb className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Central icon with premium styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 dark:border-white/20 z-10 animate-glow-pulse">
                    <Activity className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        }
      />

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollAnimation animation="slide-right">
              <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={PlaceHolderImages.find(p => p.id === 'about-hero')?.imageUrl ?? ''}
                  alt="Akashdeep Eye Centre Team"
                  data-ai-hint="medical team"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Our Mission & Vision</h2>
                <div className="mt-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our mission is to provide the highest standard of eye care with a compassionate, patient-first approach. We are committed to utilizing cutting-edge technology and techniques to ensure the best possible outcomes for every individual who walks through our doors.
                  </p>
                  <p>
                    We envision a community where everyone has access to quality eye care, enabling them to live their lives to the fullest. Through continuous learning, research, and community outreach, we strive to be leaders in the field of ophthalmology.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/30 rounded-full blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px]" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {aboutPageStats.map((stat, index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={index * 0.1}>
                <div className="flex flex-col items-center group">
                  <div className="p-4 rounded-full bg-white/10 mb-4 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="mt-2 text-4xl font-extrabold md:text-5xl">{stat.value}</p>
                  <p className="text-primary-foreground/80 font-medium mt-1">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation animation="fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make and every patient we treat.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <Card className="h-full border-none shadow-lg bg-background hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400/20 to-pink-500/20 flex items-center justify-center mb-6 text-pink-600">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
                  <p className="text-muted-foreground">We treat every patient like family, providing personalized attention and empathy throughout their journey.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={0.2}>
              <Card className="h-full border-none shadow-lg bg-background hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-500/20 flex items-center justify-center mb-6 text-cyan-600">
                    <Activity size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">We strive for clinical perfection, continuously updating our skills and technology to deliver the best results.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={0.3}>
              <Card className="h-full border-none shadow-lg bg-background hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center mb-6 text-orange-600">
                    <Lightbulb size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">We embrace new medical advancements to offer safer, faster, and more effective treatments.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* History / Timeline Section (Simplified) */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-col md:flex-row items-center gap-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16 text-white overflow-hidden relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

              <div className="flex-1 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-6">
                  <History size={16} className="text-accent" />
                  <span>Our Journey</span>
                </div>
                <h2 className="text-3xl font-bold md:text-5xl mb-6">Over 20 Years of Excellence</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Established in 2004, Akashdeep Eye Centre started as a small clinic with a big vision. Today, we are proud to be one of the leading eye care providers in the region, trusted by thousands of families.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 text-accent font-bold text-xl">2004</div>
                    <div className="text-slate-300">Clinic founded by Dr. Deepak Chauhan.</div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 text-accent font-bold text-xl">2010</div>
                    <div className="text-slate-300">Expanded to include advanced surgical unit.</div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 text-accent font-bold text-xl">2018</div>
                    <div className="text-slate-300">Reached milestone of 10,000 successful surgeries.</div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 text-accent font-bold text-xl">2024</div>
                    <div className="text-slate-300">Introduced latest AI-assisted diagnostic tools.</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 z-10 relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={PlaceHolderImages.find(p => p.id === 'clinic-interior')?.imageUrl ?? ''}
                  alt="Clinic History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-center text-3xl font-bold text-primary md:text-4xl mb-4">Meet Our Specialists</h2>
            <p className="text-center mx-auto max-w-2xl text-lg text-muted-foreground mb-16">
              Our team of board-certified ophthalmologists is the heart of our clinic.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <ScrollAnimation key={member.id} animation="slide-up" delay={idx * 0.2}>
                <Card className="h-full text-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden group border-muted">
                  <CardHeader className="items-center bg-gradient-to-b from-secondary to-background pt-10 pb-2">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/40 transition-all duration-500" />
                      <Avatar className="h-32 w-32 border-4 border-background shadow-lg relative z-10">
                        <AvatarImage src={PlaceHolderImages.find(p => p.id === member.imageId)?.imageUrl} alt={member.name} data-ai-hint="doctor portrait" />
                        <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">{member.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center p-8">
                    <CardTitle className="text-xl font-bold mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium mb-6 uppercase tracking-wide text-xs">{member.role}</CardDescription>
                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection items={generalFaqs} title="Frequently Asked Questions" />

      {/* CTA Section */}
      <section className="container mx-auto py-16 md:pb-24 px-4 md:px-6">
        <ScrollAnimation animation="slide-up">
          <div className="rounded-3xl bg-primary p-12 text-center text-primary-foreground shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000" />
            <h2 className="text-3xl font-bold md:text-4xl relative z-10">Join Our Community</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90 relative z-10">
              Follow our journey and stay updated with the latest in eye care. Your vision is our passion.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-lg rounded-full px-8 relative z-10">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
