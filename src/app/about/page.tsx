import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/PageHeader';
import { team, aboutPageStats } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Akashdeep Eye Centre"
        subtitle="Dedicated to preserving and enhancing the gift of sight for over 20 years."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                <Image 
                    src={PlaceHolderImages.find(p => p.id === 'about-hero')?.imageUrl ?? ''}
                    alt="Akashdeep Eye Centre Team"
                    data-ai-hint="medical team"
                    fill
                    className="object-cover"
                />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">Our Mission & Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our mission is to provide the highest standard of eye care with a compassionate, patient-first approach. We are committed to utilizing cutting-edge technology and techniques to ensure the best possible outcomes for every individual who walks through our doors.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We envision a community where everyone has access to quality eye care, enabling them to live their lives to the fullest. Through continuous learning, research, and community outreach, we strive to be leaders in the field of ophthalmology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                {aboutPageStats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <stat.icon className="h-12 w-12 text-primary" />
                        <p className="mt-2 text-3xl font-bold md:text-4xl">{stat.value}</p>
                        <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Meet Our Specialists</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our team of board-certified ophthalmologists is the heart of our clinic.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map(member => (
              <Card key={member.id} className="text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="items-center">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={PlaceHolderImages.find(p => p.id === member.imageId)?.imageUrl} alt={member.name} data-ai-hint="doctor portrait" />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="mt-1 text-primary">{member.role}</CardDescription>
                  <p className="mt-4 text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="container mx-auto py-16 md:pb-24">
        <div className="rounded-lg bg-primary p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold md:text-4xl">Join Our Community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Follow our journey and stay updated with the latest in eye care. Your vision is our passion.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
