// components/Header.tsx
import React from 'react';

export const Header: React.FC = () => (
  <div className="flex flex-1 items-center min-h-[200px] p-4 md:p-6">
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Generate Instagram Captions</h1>
      <p className="text-gray-500 dark:text-gray-400">Get the perfect caption for your post</p>
    </div>
  </div>
);