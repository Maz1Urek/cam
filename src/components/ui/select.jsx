import React from 'react';

// Define Select
export function Select({ children, value, onValueChange }) {
  return (
    <div className="select">
      <select value={value} onChange={(e) => onValueChange(e.target.value)}>
        {children}
      </select>
    </div>
  );
}

// Define SelectTrigger
export function SelectTrigger({ children, className }) {
  return (
    <div className={`select-trigger ${className}`}>
      {children}
    </div>
  );
}

// Define SelectValue
export function SelectValue({ children }) {
  return <div className="select-value">{children}</div>;
}

// Define SelectContent
export function SelectContent({ children }) {
  return <div className="select-content">{children}</div>;
}

// Define SelectItem
export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
