import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  onClick,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-lime text-neutral-black hover:bg-lime-dark active:scale-95 shadow-button rounded-md',
    secondary: 'bg-transparent text-neutral-black border border-neutral-gray-300 hover:bg-neutral-gray-100 active:scale-95 rounded-md',
    success: 'bg-success text-neutral-black hover:bg-lime-dark active:scale-95 rounded-md',
    destructive: 'bg-transparent text-error border border-error hover:bg-red-50 active:scale-95 rounded-md',
    icon: 'bg-transparent text-neutral-gray-700 hover:bg-neutral-gray-100 rounded-sm p-2',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
