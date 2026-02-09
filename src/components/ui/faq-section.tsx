'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { cn } from '@/lib/utils';

export type FaqItem = {
    question: string;
    answer: string;
};

interface FaqSectionProps {
    items: FaqItem[];
    title?: string;
    subtitle?: string;
    className?: string;
}

export function FaqSection({
    items,
    title = "Frequently Asked Questions",
    subtitle = "Find answers to common questions about our services and eye care procedures.",
    className
}: FaqSectionProps) {
    return (
        <section className={cn("py-20 md:py-28 bg-secondary/20", className)}>
            <div className="container mx-auto px-4 md:px-6">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">{title}</h2>
                        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
                    </div>
                </ScrollAnimation>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {items.map((item, idx) => (
                            <ScrollAnimation key={idx} animation="slide-up" delay={idx * 0.05}>
                                <AccordionItem value={`item-${idx}`} className="border border-muted rounded-xl bg-background px-6 shadow-sm data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all duration-200">
                                    <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-primary transition-colors hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </ScrollAnimation>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
