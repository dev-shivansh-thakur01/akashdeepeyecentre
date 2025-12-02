import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  imageId: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageId: string;
};

export type Testimonial = {
  id: number;
  name: string;
  quote: string;
  rating: number;
  imageId: string;
};

export type GalleryImage = {
    id: number;
    title: string;
    description: string;
    beforeImageId: string;
    afterImageId: string;
}

export type Location = {
    name: string;
    address: string;
}
