import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'none';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<any>;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  id,
  type = 'button',
  onClick,
  ...props
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';

  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white shadow-sm border border-transparent',
    secondary:
      'bg-white hover:bg-slate-50 text-primary border border-primary/20 shadow-sm',
    outline:
      'bg-transparent hover:bg-primary/5 text-primary border border-primary/30',
    ghost:
      'bg-transparent hover:bg-primary/5 text-primary',
    none: '',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg',
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={combinedClassName}
        role="button"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
