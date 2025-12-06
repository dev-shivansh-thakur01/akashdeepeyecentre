import type { FC } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
