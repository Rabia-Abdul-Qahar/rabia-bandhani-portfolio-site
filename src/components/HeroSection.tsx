
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  const handleGetInTouch = () => {
    // This will open the user's default email client with pre-filled recipient
    window.location.href = "mailto:rabiarajput0300@gmail.com?subject=Let's Connect&body=Hi Rabia,%0D%0A%0D%0AI would like to discuss...";
  };

  const handleDownloadResume = () => {
    // Replace with your actual Google Drive resume link
    window.open("https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID/view?usp=sharing", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-muted-foreground text-2xl md:text-3xl font-normal block mb-2">
              Hello, I am
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rabia Bandhani
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Software Developer & Aspiring Data Scientist
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative software solutions and exploring the fascinating world of data science. 
            Currently pursuing Bachelor's in Computer Science while building real-world applications and diving deep into 
            machine learning and analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleGetInTouch}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/rabia-abdul-qahar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:rabiarajput0300@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
