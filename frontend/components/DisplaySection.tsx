// components/DisplaySection.tsx
import React from 'react';
import { CaptionDisplay } from '@/components/CaptionsDisplay';
import { CaptionData } from '@/components/types';

interface DisplaySectionProps {
  data: CaptionData | undefined;
  isValidating: boolean;
  copiedText: string;
  onCopy: () => void;
}

export const DisplaySection: React.FC<DisplaySectionProps> = ({ data, isValidating, copiedText, onCopy }) => (
  <div className="rounded-lg border border-gray-200 dark:border-gray-800">
    <div className="p-4 md:p-6">
      <CaptionDisplay 
        data={data}
        isValidating={isValidating}
        copiedText={copiedText}
        onCopy={onCopy}
      />
    </div>
  </div>
);