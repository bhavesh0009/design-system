import React from 'react';

const Badge = ({
  children,
  variant = 'tag',
  className = ''
}) => {
  const variants = {
    tag: 'bg-neutral-gray-100 text-neutral-black',
    count: 'bg-lime text-neutral-black font-semibold min-w-[24px]',
    status: 'bg-purple text-white',
    success: 'bg-success text-neutral-black',
    error: 'bg-error text-white',
    warning: 'bg-warning text-white',
  };

  return (
    <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
