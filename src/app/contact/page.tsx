import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { locations, contactDetails } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactHeroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');


  return (
    <div>
      <section className="relative h-[50vh] w-full">
        {contactHeroImage && (
            <Image
                src={contactHeroImage.imageUrl}
                alt={contactHeroImage.description}
                data-ai-hint={contactHeroImage.imageHint}
                fill
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-2 text-lg">
            <Link href="/" className="hover:underline">Home</Link> → Contact Us
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto -mt-48">
            <div className="rounded-lg bg-primary p-12 text-center text-primary-foreground shadow-2xl">
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Locations</h2>
                <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
                    {locations.map((location) => (
                        <div key={location.name} className="flex items-start gap-4">
                             <MapPin className="mt-1 h-8 w-8 flex-shrink-0 text-accent" />
                             <div>
                                <h3 className="text-xl font-bold uppercase">{location.name}</h3>
                                <p className="mt-1 text-primary-foreground/80">{location.address}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="container mx-auto py-16 md:py-8">
        <Card>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Our team is available to assist you during business hours.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">{contactDetails.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">{contactDetails.email}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 border-t pt-8">
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
            <div className="relative min-h-[400px] w-full lg:min-h-full">
              {mapImage && (
                <Link href={contactDetails.mapLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={mapImage.imageUrl}
                    alt="Map to Tewarie Eye Centre"
                    data-ai-hint={mapImage.imageHint}
                    fill
                    className="object-cover lg:rounded-r-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">Click to open in Google Maps</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
