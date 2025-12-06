import type { NavLink, Service, TeamMember, Testimonial, GalleryImage, Location } from './types';
import { Eye, Shield, Gem, BrainCircuit, Users, HeartHandshake, BookOpen, Phone, Map, Briefcase, Glasses } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export const services: Service[] = [
  {
    id: 1,
    slug: 'cataract-surgery',
    title: 'Cataract Surgery',
    description: 'Advanced, minimally invasive surgery to restore vision affected by cataracts.',
    longDescription: 'Our state-of-the-art cataract surgery removes the clouded lens and replaces it with a premium intraocular lens (IOL), restoring clear vision and often reducing the need for glasses.',
    icon: Eye,
    imageId: 'service-cataract',
    benefits: [
        "Restores clear vision",
        "Reduces dependence on glasses",
        "Improves quality of life"
    ],
    risks: [
        "Infection",
        "Inflammation",
        "Retinal detachment"
    ]
  },
  {
    id: 2,
    slug: 'glaucoma-treatment',
    title: 'Glaucoma Treatment',
    description: 'Comprehensive management and treatment for all stages of glaucoma.',
    longDescription: 'We provide comprehensive care for glaucoma, including early detection, medication management, and advanced surgical procedures to preserve your vision and prevent further damage.',
    icon: Shield,
    imageId: 'service-glaucoma',
    benefits: [
        "Prevents further vision loss",
        "Lowers intraocular pressure",
        "Personalized treatment plans"
    ],
    risks: [
        "Redness or irritation",
        "Blurred vision",
        "Dry eyes"
    ]
  },
  {
    id: 3,
    slug: 'laser-lasik-surgery',
    title: 'Laser / LASIK Surgery',
    description: 'Achieve freedom from glasses and contacts with our precision LASIK procedures.',
    longDescription: 'Experience the freedom of clear vision without glasses. Our LASIK and laser eye surgery options are customized to your unique eyes, using the latest technology for a safe and effective outcome.',
    icon: Gem,
    imageId: 'service-lasik',
    benefits: [
        "Corrects vision",
        "Quick recovery",
        "Reduces need for corrective eyewear"
    ],
    risks: [
        "Dry eyes",
        "Glare or halos",
        "Undercorrections or overcorrections"
    ]
  },
  {
    id: 4,
    slug: 'retinal-care',
    title: 'Retinal Care',
    description: 'Specialized diagnosis and treatment for retinal conditions like diabetic retinopathy.',
    longDescription: 'Our retina specialists are equipped to diagnose and treat a wide range of conditions affecting the retina, including diabetic retinopathy, macular degeneration, and retinal detachments.',
    icon: BrainCircuit,
    imageId: 'service-retina',
    benefits: [
        "Prevents or slows disease progression",
        "Preserves or improves vision",
        "Manages chronic conditions"
    ],
    risks: [
        "Floaters",
        "Light sensitivity",
        "Infection"
    ]
  },
  {
    id: 5,
    slug: 'refraction-and-spectacle-services',
    title: 'Refraction and Spectacle Services',
    description: 'Precise vision testing and a wide range of stylish and functional eyewear.',
    longDescription: 'Our comprehensive eye exams ensure an accurate prescription. We offer a wide selection of frames and lenses to suit your style and visual needs, from single vision to progressive lenses.',
    icon: Glasses,
    imageId: 'service-refraction',
    benefits: [
        "Accurate vision correction",
        "Wide selection of eyewear",
        "Expert fitting and adjustments"
    ],
    risks: [
        "Eyestrain if prescription is incorrect",
        "Difficulty adapting to new lenses",
        "Frame discomfort"
    ]
  },
  {
    id: 6,
    slug: 'refractive-surgery',
    title: 'Refractive Surgery',
    description: 'Advanced procedures to correct vision and reduce dependence on glasses.',
    longDescription: 'Beyond LASIK, we offer various refractive surgery options like PRK and ICL to correct nearsightedness, farsightedness, and astigmatism, tailored to your specific eye structure and lifestyle.',
    icon: Eye,
    imageId: 'service-refractive-surgery',
    benefits: [
        "Permanent vision correction",
        "Suitable for a wider range of patients",
        "High success rates"
    ],
    risks: [
        "Longer recovery time than LASIK (for PRK)",
        "Potential for halos or glare",
        "Risk of infection"
    ]
  },
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Deepak Chauhan',
    role: 'Chief Ophthalmologist & Cataract Surgeon',
    bio: 'Dr. Deepak Kumar Chauhan, who has performed over 4,500 surgeries, specialises in phacoemulsification, glaucoma, and refractive procedures. With extensive experience at the top hospitals, precision, innovation, and care define his approach towards restituting vision for a quality life of the patient.',
    imageId: 'team-1',
  },
  {
    id: 2,
    name: 'Dr. Anshima Singh',
    role: 'Glaucoma & LASIK Specialist',
    bio: 'Dr. Anshima Singh is a gold medallist in MS (Ophthalmology) and an MBBS graduate with over 6,000 successful surgeries. A dedicated ophthalmologist with expertise in cataract surgery and trauma care since 2014 as a consultant in Dev Eye Centre, she brings advanced eye treatments and precision to the lives of the patients she touches.',
    imageId: 'team-2',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John D.',
    quote: 'The LASIK surgery was life-changing. The staff at Akashdeep Eye Centre were professional and reassuring throughout the entire process. I can finally see perfectly without glasses!',
    rating: 5,
    imageId: 'testimonial-1',
  },
  {
    id: 2,
    name: 'Sarah L.',
    quote: 'My mother\'s cataract surgery went flawlessly. Dr. Sharma was incredible, and the post-op care was excellent. We are so grateful for the restored vision and quality of life.',
    rating: 5,
    imageId: 'testimonial-2',
  },
  {
    id: 3,
    name: 'Michael P.',
    quote: 'I have been managing my glaucoma with Dr. Carter for years. His expertise and proactive approach have preserved my vision. I highly recommend this clinic.',
    rating: 5,
    imageId: 'testimonial-3',
  },
];

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        title: "Cataract Surgery Results",
        description: "Clarity restored after a successful cataract removal and lens implant.",
        beforeImageId: "gallery-1-before",
        afterImageId: "gallery-1-after"
    },
    {
        id: 2,
        title: "LASIK Transformation",
        description: "From blurry vision to 20/20 sharpness with our advanced LASIK procedure.",
        beforeImageId: "gallery-2-before",
        afterImageId: "gallery-2-after"
    },
    {
        id: 3,
        title: "Retinal Treatment",
        description: "A healthy retina after specialized treatment for a degenerative condition.",
        beforeImageId: "gallery-3-before",
        afterImageId: "gallery-3-after"
    }
]

export const aboutPageStats = [
    { icon: Users, value: "10,000+", label: "Happy Patients" },
    { icon: Briefcase, value: "20+", label: "Years of Experience" },
    { icon: HeartHandshake, value: "5,000+", label: "Successful Surgeries" },
    { icon: BookOpen, value: "15+", label: "Published Researches" },
];

export const locations: Location[] = [
    {
        name: "Vasundhara(GZB)",
        address: "G 27, Uttranchal Plaza 2, Sector 3, Vasundhara, Ghaziabad, Uttar Pradesh 201012"
    },
    {
        name: "Yamuna Vihar(Delhi)",
        address: " DDA MARKET, C 4/152, opposite C 5, Block C, Yamuna Vihar, Delhi, 110053"
    }
];

export const contactDetails = {
    address: '123 Vision Lane, Clarity City, 12345',
    phone: '+91 9582096481',
    email: 'akashdeepeyecentre@gmail.com',
    mapLink: 'https://maps.google.com'
}
