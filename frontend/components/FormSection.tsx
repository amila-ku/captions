// components/FormSection.tsx
import React from 'react';
import { CaptionForm } from '@/components/CaptionForm';
import { FormData } from '@/components/types';

interface FormSectionProps {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormSection: React.FC<FormSectionProps> = ({ formData, onFormChange, onSubmit }) => (
  <div className="flex flex-1 items-center min-h-[200px] p-4 md:p-6">
    <CaptionForm 
      formData={formData}
      onFormChange={onFormChange}
      onSubmit={onSubmit}
    />
  </div>
);