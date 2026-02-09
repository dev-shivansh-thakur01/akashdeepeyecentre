import { Card, CardContent } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, MessageSquarePlus } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TestimonialsPage() {
  return (
    <div>
      <HeroSection
        title="Words from Our Patients"
        subtitle="We are proud of the positive impact we've had on our patients' lives. Here’s what they have to say about their experience at Akashdeep Eye Centre."
        breadcrumbs={[{ label: 'Testimonials', href: '/testimonials' }]}
      />

      <section className="container mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <ScrollAnimation key={testimonial.id} animation="scale-up" delay={idx * 0.1}>
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-muted bg-background/50 backdrop-blur-sm">
                <CardContent className="flex flex-grow flex-col justify-between p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="my-4 flex-grow text-lg text-muted-foreground italic leading-relaxed">
                    {`"${testimonial.quote}"`}
                  </blockquote>
                  <div className="pt-6 border-t border-muted">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={PlaceHolderImages.find(p => p.id === testimonial.imageId)?.imageUrl} alt={testimonial.name} data-ai-hint="patient portrait" />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollAnimation animation="slide-up">
            <div className="inline-flex items-center justify-center p-4 bg-background rounded-full shadow-sm mb-8">
              <MessageSquarePlus className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold md:text-4xl mb-6">Share Your Experience</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Your feedback helps us improve and helps others make informed decisions about their eye care. We would love to hear your story!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-12 px-8 text-lg rounded-full">
                <Link href="https://g.page/r/review" target="_blank">Review on Google</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full bg-background">
                <Link href="/contact">Send us a Message</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
