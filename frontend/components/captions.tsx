// components/Captions.tsx
'use client'

import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { FormSection } from '@/components/FormSection';
import { DisplaySection } from '@/components/DisplaySection';
import { useCaptionGenerator } from '@/components/hooks/useCaptionGenerator';
import { FormData } from '@/components/types';

export function Captions() {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    mood: '',
    words: '',
  });
  const [copiedText, setCopiedText] = useState('');

  const { data, isValidating, error } = useCaptionGenerator(formData);

  if (error) {
    console.error('API Error:', error);
    // You can display an error message to the user here
  }

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // The API call is triggered automatically by the useCaptionGenerator hook
  };

  const copyToClipboard = () => {
    if (data?.caption) {
      navigator.clipboard.writeText(data.caption);
      setCopiedText(data.caption);
      setTimeout(() => {
        setCopiedText('');
      }, 2000);
    }
  };

  return (
    <Layout>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-800">
          <Header />
          <FormSection 
            formData={formData}
            onFormChange={handleFormChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <DisplaySection 
        data={data}
        isValidating={isValidating}
        copiedText={copiedText}
        onCopy={copyToClipboard}
      />
    </Layout>
  );
}