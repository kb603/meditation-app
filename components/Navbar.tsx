import Link from "next/link";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobile-menu";

export default function Navbar() {
  return (
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
              href="/library"
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
            <Link
              href="/progress"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Progress
            </Link>
            <Button asChild className="ml-4">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
