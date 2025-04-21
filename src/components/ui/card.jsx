import React from 'react';

// Define Card
export function Card({ children, className }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

// Define CardContent
export function CardContent({ children }) {
  return (
    <div className="card-content">
      {children}
    </div>
  );
}
