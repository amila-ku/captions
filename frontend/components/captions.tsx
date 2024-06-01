'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function Captions() {
  const [location, setLocation] = useState('')
  const [mood, setMood] = useState('')
  const [words, setWords] = useState('')
  const [url, setUrl] = useState('')

  const { data, isValidating, error } = useSWR(url, fetcher)

  console.log('API Response:', data)

  if (error) {
    console.error('API Error:', error)
    // You can display an error message to the user here
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUrl = `http://127.0.0.1:4000/captions?location=${location}&mood=${mood}&words=${words}`
    setUrl(newUrl)
  }

  return (
    <div className="px-4 py-6 md:px-6 md:py-12">
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-800">
            <div className="flex flex-1 items-center min-h-[200px] p-4 md:p-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Generate Instagram Captions</h1>
                <p className="text-gray-500 dark:text-gray-400">Get the perfect caption for your post</p>
              </div>
            </div>
            <div className="flex flex-1 items-center min-h-[200px] p-4 md:p-6">
              <form className="flex-1 grid gap-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="E.g. Paris" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feeling">Feeling</Label>
                  <Input id="feeling" placeholder="E.g. happy" value={mood} onChange={(e) => setMood(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="words">Words to include</Label>
                  <Input id="words" placeholder="E.g. beach, sunset" value={words} onChange={(e) => setWords(e.target.value)} />
                </div>
                <Button type="submit" size="lg">Generate</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 dark:border-gray-800">
          <div className="p-4 md:p-6">
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
                  </div>
                ) : (
                  <div>No caption available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}