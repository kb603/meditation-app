import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                MindfulMe
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Meditation Library
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Features
              </Link>
              <Button asChild className="ml-4">
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Your Inner Peace with MindfulMe
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover the power of mindfulness and meditation. Our app guides
                you on a journey to reduce stress, improve focus, and enhance
                your overall well-being.
              </p>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/signup">Start Your Free Trial</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <Image
                src="/placeholder.svg"
                alt="Meditation illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            The Benefits of Meditation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Reduce Stress",
                description:
                  "Regular meditation has been shown to lower cortisol levels, helping you feel more relaxed and at ease.",
              },
              {
                title: "Improve Focus",
                description:
                  "Mindfulness practices can enhance your concentration and help you stay present in your daily activities.",
              },
              {
                title: "Enhance Sleep",
                description:
                  "Meditation can help calm your mind, making it easier to fall asleep and improve overall sleep quality.",
              },
              {
                title: "Boost Emotional Well-being",
                description:
                  "Mindfulness can increase self-awareness and help you manage difficult emotions more effectively.",
              },
              {
                title: "Increase Self-Compassion",
                description:
                  "Regular practice can help you develop a kinder, more accepting attitude towards yourself and others.",
              },
              {
                title: "Cultivate Gratitude",
                description:
                  "Meditation can help you appreciate the present moment and foster a more positive outlook on life.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Mindfulness Journey?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Join thousands of others who have discovered the transformative
            power of meditation with MindfulMe.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="/signup">Get Started for Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2023 MindfulMe. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
