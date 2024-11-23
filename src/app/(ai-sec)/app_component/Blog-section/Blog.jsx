import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, PartyPopper } from "lucide-react"

const blogPosts = [
  {
    title: "Justice for All: How Legal Tech Can Bridge India's Access Gap",
    content: "Explore how legal tech can democratize access to justice in India. Learn how AI-driven tools can provide instant legal insights, automated document creation, and transparent logging. Discover how this technology can empower citizens, lawyers, and judges to create a more inclusive justice system.",
    
  },
  {
    title: "Digital Courts: The Future of Indian Judiciary",
    content: "Examine the emergence of digital courts in India. Understand how technology can enhance court efficiency, reduce backlog, and improve transparency. Learn about successful pilots and future plans for digital court expansion.",
   
  },
  {
    title: "Unshackling Justice: How Legal Tech is Revolutionizing India's Courts",
    content: "Discover how AI-powered legal tools are transforming India's judiciary. Learn how instant insights, automated drafting, and document analysis can reduce backlog, enhance accuracy, and increase transparency. Explore the potential of legal tech to make justice more accessible and affordable.",
    date: "2023-06-20"
  },
  {
    title: "Legal Tech for Social Impact: Enhancing Access to Justice",
    content: "Discover how legal tech can drive social change in India. Learn about innovative solutions addressing access to justice, human rights, and environmental issues. Explore collaborations between legal tech startups, NGOs, and government agencies.",
    
  }
]

export default function BlogSection() {
  return (
    <div id='blog' className="container mx-auto px-4 py-16 sm:px-6 md:max-h-[984px] lg:px-8 max-h-screen">
      <div className="text-center sm:mb-16">
      <Badge className="text-xs sm:text-sm rounded-full bg-black mb-4 gap-x-3"><PartyPopper size={15} />Blogs</Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Latest from Our Blog</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col h-full bg-inherit shadow-xl">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge  className="text-sm bg-black rounded-full">
                    Blogs
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-primary">{post.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{post.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="" className="w-auto justify-between group">
                Read more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}