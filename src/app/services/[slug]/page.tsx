import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/legacy/image';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ServiceDetailPageProps) {
    const service = services.find(s => s.slug === params.slug);
    if (!service) {
        return {
            title: 'Service Not Found'
        }
    }
    return {
        title: `${service.title} | Tewarie Eye Centre`,
        description: `Learn more about ${service.title} at Tewarie Eye Centre.`
    }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }
  
  const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);

  return (
    <div>
      <PageHeader title={service.title} subtitle={service.longDescription} />

      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
            {serviceImage && (
              <CardHeader className="relative h-80 w-full p-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt={service.title}
                  data-ai-hint={serviceImage.imageHint}
                  layout="fill"
                  className="rounded-t-lg object-cover"
                />
              </CardHeader>
            )}
              <CardHeader>
                <CardTitle className="text-2xl text-primary">About the Procedure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-muted-foreground">
                 <p>{service.longDescription}</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-primary">
                  <ShieldCheck />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-primary">
                  <AlertTriangle />
                  Potential Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.risks?.map((risk, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-16" />
        <div className="text-center">
            <h3 className="text-2xl font-bold">Is this procedure right for you?</h3>
            <p className="mt-2 text-muted-foreground">Contact us for a consultation to discuss your options.</p>
        </div>
      </div>
    </div>
  );
}
