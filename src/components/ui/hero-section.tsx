"use client";

import type { FC, ReactNode } from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
    title: string | ReactNode;
    subtitle?: string;
    breadcrumbs?: { label: string; href: string }[];
    rightContent?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({
    title,
    subtitle,
    breadcrumbs,
    rightContent
}) => {
    return (
        <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 md:pt-44 md:pb-32">
            {/* Abstract Background Gradients (Home Style) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-accent/20 to-primary/20 blur-[100px] animate-pulse delay-700" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-[80px] animate-pulse delay-1000" />
            </div>

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="animate-fade-in">
                            {breadcrumbs && (
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-sm text-muted-foreground">
                                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                    {breadcrumbs.map((crumb, index) => (
                                        <div key={crumb.href} className="flex items-center gap-2">
                                            <ChevronRight className="h-4 w-4" />
                                            <Link href={crumb.href} className={cn("hover:text-primary transition-colors", index === breadcrumbs.length - 1 && "text-foreground font-medium pointer-events-none")}>
                                                {crumb.label}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
                                {title}
                            </h1>

                            {subtitle && (
                                <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right Side Visuals */}
                    <div className="relative z-10 w-full hidden lg:block">
                        {rightContent}
                    </div>
                </div>
            </div>

            {/* Fallback decorative floaters if no right content? Or just keep generic ones */}
            {!rightContent && (
                <>
                    <div className="absolute top-1/4 right-10 w-12 h-12 rounded-full border border-primary/20 opacity-20 animate-float hidden lg:block" />
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full border border-accent/20 opacity-20 animate-float animation-delay-2000 hidden lg:block" />
                </>
            )}
        </section>
    );
};
