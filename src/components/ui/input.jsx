import React from 'react';

export const Input = ({ label, ...props }) => (
  <div className="w-full mb-4">
    {label && <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>}
    <input
      className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);
