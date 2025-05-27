
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Computer Geek Style Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                    <div className="absolute inset-1 bg-green-400 rounded-xs opacity-80"></div>
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-mono">
                {"<RB/>"}
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm border-2"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Rabia Bandhani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
