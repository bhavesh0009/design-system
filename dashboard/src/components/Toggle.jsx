import React from 'react';

const Toggle = ({ checked = false, onChange, label, disabled = false }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className={`
          w-11 h-6
          rounded-full
          ${checked ? 'bg-purple' : 'bg-neutral-gray-300'}
          peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple peer-focus:ring-offset-2
          peer-disabled:opacity-50
          transition-colors duration-200
        `}>
          <div className={`
            absolute top-1 left-1
            w-4 h-4
            bg-white
            rounded-full
            transition-transform duration-200
            ${checked ? 'transform translate-x-5' : ''}
          `} />
        </div>
      </div>
      {label && (
        <span className="ml-3 text-sm font-medium text-neutral-gray-700">
          {label}
        </span>
      )}
    </label>
  );
};

export default Toggle;
