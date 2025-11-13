import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  label,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-gray-700 mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white border border-neutral-gray-300 rounded-md text-sm text-left flex items-center justify-between hover:border-neutral-gray-500 focus:outline-none focus:border-purple focus:border-2 transition-colors duration-200"
      >
        <span className={selectedOption ? 'text-neutral-black' : 'text-neutral-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-neutral-gray-700 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white rounded-md shadow-dropdown p-2 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`
                  w-full px-3 py-2.5 text-sm text-left rounded-lg
                  ${option.value === value ? 'bg-lime-light font-medium' : 'hover:bg-neutral-gray-100'}
                  transition-colors duration-150
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
