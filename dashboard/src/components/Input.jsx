import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  icon,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-gray-500">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-4 py-3
            bg-white
            border ${error ? 'border-error border-2' : 'border-neutral-gray-300'}
            rounded-md
            text-sm text-neutral-black
            placeholder:text-neutral-gray-500
            focus:outline-none focus:border-purple focus:border-2
            disabled:bg-neutral-gray-100 disabled:cursor-not-allowed
            transition-colors duration-200
            ${icon ? 'pl-12' : ''}
          `}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-error">{error}</p>
      )}
    </div>
  );
};

export const TextArea = ({
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  rows = 4,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-3
          bg-white
          border ${error ? 'border-error border-2' : 'border-neutral-gray-300'}
          rounded-md
          text-sm text-neutral-black
          placeholder:text-neutral-gray-500
          focus:outline-none focus:border-purple focus:border-2
          disabled:bg-neutral-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
          resize-vertical
        `}
      />
      {error && (
        <p className="mt-1 text-xs text-error">{error}</p>
      )}
    </div>
  );
};

export default Input;
