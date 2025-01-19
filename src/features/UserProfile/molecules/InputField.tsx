import React from 'react';
import { Input } from '../../../shared/atoms/Input';

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  description?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  description,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <Input value={value} onChange={onChange} className={`mt-1 block w-full px-4 py-2 border ${
      error ? "border-red-500" : "border-gray-300"
    } rounded-md focus:ring-blue-500 focus:border-blue-500`}/>
    {description && <p className="text-sm text-gray-500">{description}</p>}
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export default InputField;
