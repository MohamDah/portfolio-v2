import React from 'react';
import { FieldError } from 'react-hook-form';
import { Input as HeadlessInput } from '@headlessui/react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <HeadlessInput
          id={id}
          ref={ref}
          className={`w-full px-3 py-2 bg-transparent border border-primary-900 rounded focus:outline-none focus:border-gray-400 ${className}`}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-sm mt-1 block">{error.message}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
