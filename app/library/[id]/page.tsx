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

// This would typically come from a backend based on the program ID
const programDetails = {
  id: 1,
  name: "Stress Relief",
  description: "A guided meditation to help you relax and reduce stress.",
  duration: "10 min",
  category: "Relaxation",
  benefits: [
    "Reduces cortisol levels",
    "Improves focus and clarity",
    "Promotes overall well-being",
  ],
};

export default function ProgramDetails({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch the program details based on params.id

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{programDetails.name}</CardTitle>
          <CardDescription>
            {programDetails.category} - {programDetails.duration}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{programDetails.description}</p>
          <h3 className="font-bold mb-2">Benefits:</h3>
          <ul className="list-disc pl-5">
            {programDetails.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="/library">Back to Library</Link>
          </Button>
          <Button>Start Meditation</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
