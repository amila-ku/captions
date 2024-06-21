// components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="px-4 py-6 md:px-6 md:py-12">
    <div className="flex flex-col gap-4">
      {children}
    </div>
  </div>
);