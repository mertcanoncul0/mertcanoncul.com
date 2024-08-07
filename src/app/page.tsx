"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function Home() {
  const [name, setName] = useState("Mertcan Öncül")

  return (
    <main className="bg-black h-full p-4 flex items-center flex-col">
      <h1 className={cn("text-white text-3xl pb-4")}>{name}</h1>
      <Button
        variant="secondary"
        size="lg"
        className="bg-white text-black text-2xl font-bold hover:bg-white/70"
        onClick={() => setName("Frontend Developer")}
      >
        Click me
      </Button>
    </main>
  )
}
