// components/CaptionForm.tsx
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormData } from '@/components/types';

interface CaptionFormProps {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CaptionForm: React.FC<CaptionFormProps> = ({ formData, onFormChange, onSubmit }) => {
  return (
    <form className="flex-1 grid gap-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input 
          id="location" 
          placeholder="E.g. Paris" 
          value={formData.location} 
          onChange={(e) => onFormChange('location', e.target.value)} 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="feeling">Feeling</Label>
        <Input 
          id="feeling" 
          placeholder="E.g. happy" 
          value={formData.mood} 
          onChange={(e) => onFormChange('mood', e.target.value)} 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="words">Words to include</Label>
        <Input 
          id="words" 
          placeholder="E.g. beach, sunset" 
          value={formData.words} 
          onChange={(e) => onFormChange('words', e.target.value)} 
        />
      </div>
      <Button type="submit" size="lg">Generate</Button>
    </form>
  );
};