import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/PageHeader';
import { galleryImages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        title="Before & After Gallery"
        subtitle="Witness the life-changing results our patients have experienced. These transformations showcase the expertise and care we provide."
      />

      <section className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {galleryImages.map(item => {
            const beforeImage = PlaceHolderImages.find(p => p.id === item.beforeImageId);
            const afterImage = PlaceHolderImages.find(p => p.id === item.afterImageId);
            return (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-primary">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="mb-2 text-center font-semibold">Before</h3>
                      {beforeImage && (
                        <div className="relative h-64 w-full overflow-hidden rounded-md">
                          <Image
                            src={beforeImage.imageUrl}
                            alt={`Before: ${item.title}`}
                            data-ai-hint={beforeImage.imageHint}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="mb-2 text-center font-semibold">After</h3>
                      {afterImage && (
                        <div className="relative h-64 w-full overflow-hidden rounded-md">
                          <Image
                            src={afterImage.imageUrl}
                            alt={`After: ${item.title}`}
                            data-ai-hint={afterImage.imageHint}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
