import React from 'react';

export const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 ease-in-out"
    {...props}
  >
    {children}
  </button>
);
