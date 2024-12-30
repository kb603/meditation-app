"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// This would typically come from a backend
const meditationPrograms = [
  { id: 1, name: "Stress Relief", duration: "10 min", category: "Relaxation" },
  { id: 2, name: "Better Sleep", duration: "15 min", category: "Sleep" },
  { id: 3, name: "Focus Boost", duration: "5 min", category: "Productivity" },
  {
    id: 4,
    name: "Anxiety Reduction",
    duration: "20 min",
    category: "Mental Health",
  },
  {
    id: 5,
    name: "Loving-Kindness",
    duration: "10 min",
    category: "Compassion",
  },
];

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPrograms = meditationPrograms.filter(
    (program) =>
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || program.category === selectedCategory)
  );

  const categories = [
    ...Array.from(
      new Set(meditationPrograms.map((program) => program.category))
    ),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Meditation Library
      </h1>

      <div className="mb-6 flex flex-wrap flex-end gap-4">
        <Input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <CardTitle>{program.name}</CardTitle>
              <CardDescription>{program.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Duration: {program.duration}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/library/${program.id}`}>Start Program</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
