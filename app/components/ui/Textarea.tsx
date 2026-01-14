import React from 'react';
import { FieldError } from 'react-hook-form';
import { Textarea as HeadlessTextarea } from '@headlessui/react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <HeadlessTextarea
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

Textarea.displayName = 'Textarea';
