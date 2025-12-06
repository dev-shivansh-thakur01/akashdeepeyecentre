import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Eye, Quote, Star } from 'lucide-react';
import { services, testimonials, team } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));
  const featuredServices = services.slice(0, 3);
  const featuredTestimonial = testimonials[0];
  const featuredDoctor = team[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full md:h-[80vh]">
        <Carousel className="h-full w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white animate-fade-in-up">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Clarity in Sight, Quality in Life
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
              Experience world-class eye care from our team of dedicated specialists.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
        </Carousel>
      </section>

      {/* About Us Summary */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Welcome to Akashdeep Eye Centre</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              For over 20 years, Akashdeep Eye Centre has been a beacon of optical health in the community. Our commitment is to provide personalized, state-of-the-art eye care in a welcoming and professional environment. We believe in empowering our patients through education and providing them with the best possible outcomes.
            </p>
            <Button asChild variant="link" className="mt-4 px-0 text-lg text-accent group">
              <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
            <Image 
              src={PlaceHolderImages.find(img => img.id === 'clinic-interior')?.imageUrl ?? ''}
              alt="Interior of the Akashdeep Eye Centre"
              data-ai-hint="clinic interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Specialized Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We offer a comprehensive range of services to treat various eye conditions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map(service => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="relative h-56 w-full p-0">
                  <Image 
                    src={serviceImage?.imageUrl ?? ''}
                    alt={serviceImage?.description ?? service.title}
                    data-ai-hint={serviceImage?.imageHint}
                    fill
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-12 w-12 text-primary"/>
          <blockquote className="mt-6 text-2xl font-medium italic text-foreground md:text-3xl">
            {`"${featuredTestimonial.quote}"`}
          </blockquote>
          <div className="mt-6 flex items-center justify-center">
            <Avatar>
              <AvatarImage src={PlaceHolderImages.find(p => p.id === featuredTestimonial.imageId)?.imageUrl} alt={featuredTestimonial.name} data-ai-hint="portrait person"/>
              <AvatarFallback>{featuredTestimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="ml-4 font-semibold text-lg">{featuredTestimonial.name}</p>
          </div>
          <div className="mt-2 flex justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <Button asChild variant="link" className="mt-8 text-lg text-accent group">
            <Link href="/testimonials">Read More Testimonials <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="rounded-lg bg-primary p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to See the World More Clearly?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Your journey to better vision starts here. Schedule your consultation with our experts today.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/booking">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
