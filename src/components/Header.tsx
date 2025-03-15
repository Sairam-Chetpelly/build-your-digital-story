
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatedButton } from "./ui/AnimatedButton";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "nav-scrolled" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-display">
          <span className="sr-only">Your Name</span>
          YN
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.substring(1));
              }}
              className={cn(
                "hover-link text-sm font-medium transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <AnimatedButton href="#contact" size="sm" variant="primary-outline">
            Let's talk
          </AnimatedButton>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0">
            <div className="flex flex-col h-full py-10 px-6">
              <div className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.substring(1));
                      document.body.click(); // Close the sheet
                    }}
                    className={cn(
                      "block py-3 text-base font-medium hover:bg-gray-50 rounded-md px-3 transition-colors",
                      activeSection === item.href.substring(1)
                        ? "text-black"
                        : "text-gray-600"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <AnimatedButton
                  href="#contact"
                  className="w-full justify-center font-medium"
                >
                  Let's talk
                </AnimatedButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
