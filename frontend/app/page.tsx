import Image from "next/image";
import { Captions } from "@/components/Captions";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Captions />
          <GoogleAnalytics gaId="G-96MR27M58D" />
        </div>
      </div>
    </main>
  );
}
