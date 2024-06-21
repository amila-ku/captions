// components/CaptionDisplay.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { CaptionData } from '@/components/types';

interface CaptionDisplayProps {
  data: CaptionData | undefined;
  isValidating: boolean;
  copiedText: string;
  onCopy: () => void;
}

export const CaptionDisplay: React.FC<CaptionDisplayProps> = ({ data, isValidating, copiedText, onCopy }) => {
  return (
    <div className="grid gap-4">
      <div className="text-sm font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
        Your perfect caption
      </div>
      <div>
        {isValidating ? (
          <div>Loading...</div>
        ) : data?.caption ? (
          <div className="prose prose-gray max-w-none">
            <p>{data.caption}</p>
            <Button onClick={onCopy}>
              {copiedText === data.caption ? 'Copied' : 'Copy'}
            </Button>
          </div>
        ) : (
          <div>No caption available</div>
        )}
      </div>
    </div>
  );
};