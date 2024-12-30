"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link
            href="/about"
            className="text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/features"
            className="text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Button asChild className="mt-4" onClick={() => setIsOpen(false)}>
            <Link href="/login">Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
