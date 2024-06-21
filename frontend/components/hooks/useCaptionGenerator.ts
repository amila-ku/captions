// hooks/useCaptionGenerator.ts
import useSWR from 'swr';
import { CaptionData, FormData } from '@/components/types';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export const useCaptionGenerator = (formData: FormData) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://captionsapp-vlx4xifzdq-nw.a.run.app';
  const url = `${apiBaseUrl}/captions?location=${formData.location}&mood=${formData.mood}&words=${formData.words}`;

  const { data, error, isValidating } = useSWR<CaptionData>(url, fetcher);

  return { data, error, isValidating };
};