// hooks/useCaptionGenerator.ts
import useSWR from 'swr';
import { CaptionData, FormData } from '@/components/types';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export const useCaptionGenerator = (formData: FormData, shouldFetch: boolean) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://captionsapp-vlx4xifzdq-nw.a.run.app';
  const url = `${apiBaseUrl}/captions?location=${formData.location}&mood=${formData.mood}&words=${formData.words}`;

  const { data, error, isValidating, mutate } = useSWR<CaptionData>(
    shouldFetch ? url : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isValidating, mutate };
};