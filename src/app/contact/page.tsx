import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactDetails } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div>
      <PageHeader
        title="Get In Touch"
        subtitle="We're here to help you on your journey to better vision. Reach out to us with any questions or to schedule an appointment."
      />

      <section className="container mx-auto py-16 md:py-24">
        <Card>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">
                Our team is available to assist you during business hours.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-muted-foreground">{contactDetails.address}</p>
                  </div>
                </li>
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
