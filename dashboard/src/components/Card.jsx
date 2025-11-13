import React from 'react';

const Card = ({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  hoverable = false
}) => {
  const variants = {
    default: 'p-6',
    compact: 'p-4',
    spacious: 'p-8',
  };

  const hoverClasses = hoverable ? 'hover:shadow-card-hover transition-shadow duration-200' : '';

  return (
    <div className={`bg-white rounded-2xl shadow-card ${variants[variant]} ${hoverClasses} ${className}`}>
      {title && (
        <div className="mb-4">
          <h3 className="text-h3 text-neutral-black">{title}</h3>
          {subtitle && <p className="text-body-sm text-neutral-gray-700 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
