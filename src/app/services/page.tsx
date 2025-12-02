import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/PageHeader';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Eye Care Services"
        subtitle="We offer a comprehensive range of advanced treatments to address all your vision needs. Explore our services to find out how we can help you see the world better."
      />

      <section className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="relative h-56 w-full p-0">
                  {serviceImage && (
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      data-ai-hint={serviceImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-4">
                     <service.icon className="h-16 w-16 text-white" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">{service.longDescription}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" className="w-full">
                    <Link href={`/services/${service.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
