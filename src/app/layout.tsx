import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Akashdeep Eye Centre | Advanced Eye Care & Surgery Specialists',
  description: 'Akashdeep Eye Centre offers world-class eye care services including Cataract Surgery, LASIK, Glaucoma Treatment, and Retina Care. Trusted by thousands for over 20 years.',
  keywords: ['Eye Clinic', 'Ophthalmologist', 'Cataract Surgery', 'LASIK', 'Glaucoma', 'Retina Specialist', 'Eye Doctor', 'Vision Care', 'Akashdeep Eye Centre'],
  openGraph: {
    title: 'Akashdeep Eye Centre | Advanced Eye Care & Surgery Specialists',
    description: 'Providing expert eye care with a personal touch. Specializing in cataract, glaucoma, and LASIK surgeries.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
