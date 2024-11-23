import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Scale, Search, Shield, Zap, BookOpen, NotepadTextDashed, Rss, NotepadText, Heart, Languages, AudioWaveform } from "lucide-react"
import { Badge } from '@/components/ui/badge'

const features = [
  {
    title: "Ask",
    description: "Instant Legal Insights: Get concise answers, backed by credible sources.",
    icon: AudioWaveform
  },
  {
    title: "Interact",
    description: "Legal Doc Analysis: Uncover Facts, Issues,  Arguments and Judgements across files.",
    icon: Brain
  },
  {
    title: "Draft",
    description: "Effortless Document Creation: Automate drafting, save hours on appeals, contracts, and more.",
    icon: NotepadTextDashed
  },
  {
    title: "Logs",
    description: "Transparency & Accountability: Track interactions, ensure clear audit trails.",
    icon: Shield
  },
  {
    title: "Organize",
    description: "AI-driven Document Categorization: Streamline your document management.",
    icon: NotepadText
  },
  {
    title: "Multilingual",
    description: "Language No Longer a Barrier: Global legal teams, unite!",
    icon: Languages
  },
  {
    title: "Community",
    description: "Collaborate with Peers: Ask, interact, and learn from fellow lawyers.",
    icon: Heart
  },
  {
    title: "Alerts",
    description: "Stay Informed: Customizable updates on laws, regulations, and court decisions.",
    icon: Rss
  },
]

export default function FeatureCards() {
  return (
    <section id="features" onScroll={true} className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="text-xs sm:text-sm rounded-full bg-black mb-4">AI Features</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Key Features of AI Tool</h2>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col h-full bg-inherit shadow-xl transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}