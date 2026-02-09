'use client';

import { useEffect, useState } from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Card, CardContent } from '@/components/ui/card';
import { FileSearch, Sparkles, HeartPulse, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: 'Consultation',
        description: 'Detailed eye examination and consultation with our experts.',
        icon: Stethoscope,
    },
    {
        id: 2,
        title: 'Diagnosis',
        description: 'Advanced diagnostic tests to pinpoint the exact issue.',
        icon: FileSearch,
    },
    {
        id: 3,
        title: 'Treatment',
        description: 'Personalized treatment plan using state-of-the-art technology.',
        icon: Sparkles,
    },
    {
        id: 4,
        title: 'Aftercare',
        description: 'Comprehensive follow-ups to ensure long-term eye health.',
        icon: HeartPulse,
    },
];

export function ProcessJourney() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000); // Change step every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 md:py-28 overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6 relative">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
                            Your Journey to Better Vision
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We've streamlined our process to ensure your experience is smooth, comfortable, and effective.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="relative">

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, idx) => {
                            const isActive = idx === activeStep;
                            return (
                                <div key={step.id} className="relative flex flex-col items-center text-center group">

                                    {/* Icon Circle */}
                                    <div
                                        className={cn(
                                            "relative flex h-28 w-28 items-center justify-center rounded-full border-4 bg-background transition-all duration-500 mb-8 z-10",
                                            isActive ? "border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] scale-110" : "border-muted group-hover:border-primary/50"
                                        )}
                                    >
                                        <step.icon
                                            className={cn(
                                                "h-10 w-10 transition-all duration-500",
                                                isActive ? "text-primary" : "text-muted-foreground"
                                            )}
                                        />
                                        {/* Ripple Effect for active */}
                                        {isActive && (
                                            <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 opacity-75" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className={cn("transition-opacity duration-500", isActive ? "opacity-100" : "opacity-70")}>
                                        <h3 className={cn("text-xl font-bold mb-3", isActive ? "text-primary" : "text-foreground")}>
                                            {step.id}. {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
