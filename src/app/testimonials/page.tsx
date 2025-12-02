import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/PageHeader';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader
        title="Words from Our Patients"
        subtitle="We are proud of the positive impact we've had on our patients' lives. Here’s what they have to say about their experience at Tewarie Eye Centre."
      />

      <section className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="flex flex-grow flex-col justify-between p-6">
                <Quote className="h-8 w-8 text-primary/50" />
                <blockquote className="my-4 flex-grow text-lg text-muted-foreground">
                  {`"${testimonial.quote}"`}
                </blockquote>
                <div>
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src={PlaceHolderImages.find(p => p.id === testimonial.imageId)?.imageUrl} alt={testimonial.name} data-ai-hint="patient portrait" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="ml-4 font-semibold">{testimonial.name}</p>
                    </div>
                    <div className="mt-2 flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
