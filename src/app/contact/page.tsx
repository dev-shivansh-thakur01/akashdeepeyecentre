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
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for any inquiries or to schedule an appointment."
      />

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Locations</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We have several clinics to serve you. Find the one nearest to you.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {locations.map((location) => (
              <Card key={location.name} className="flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-primary">{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{location.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 md:py-24">
        <Card>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Our team is available to assist you during business hours.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">{contactDetails.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">{contactDetails.email}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 border-t pt-8">
                <h3 className="text-xl font-semibold">Business Hours</h3>
                <p className="mt-2 text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
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
