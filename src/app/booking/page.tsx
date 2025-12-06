import { PageHeader } from '@/components/PageHeader';
import { BookingForm } from '@/components/BookingForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BookingPage() {
  return (
    <div>
      <PageHeader
        title="Book an Appointment"
        subtitle="Take the first step towards clearer vision. Fill out the form below to request an appointment with one of our specialists."
      />

      <section className="container mx-auto max-w-2xl py-16 md:py-24">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Appointment Request Form</CardTitle>
            <CardDescription>
              We will contact you to confirm your appointment time and date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
