import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'light' | 'navy' | 'white';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'default',
}: SectionProps) {
  const bgClasses = {
    default: 'bg-[var(--color-background)]',
    light: 'bg-[var(--color-border)]', // light blue background
    navy: 'gradient-dark-bg text-white',
    white: 'bg-white',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
