import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ResumeForge
          </h1>
          <Link to="/builder">
            <Button style={{ background: "var(--gradient-primary)" }}>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-hero)" }}></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build Your Perfect Resume in{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Minutes
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Create stunning, professional resumes with our intuitive builder. Choose from multiple
                templates, customize in real-time, and download as PDF or PNG.
              </p>
              <div className="flex gap-4">
                <Link to="/builder">
                  <Button size="lg" style={{ background: "var(--gradient-primary)" }}>
                    <Zap className="mr-2 h-5 w-5" />
                    Start Building
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Templates
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Resume Builder Hero"
                className="rounded-2xl shadow-2xl w-full"
                style={{ boxShadow: "var(--shadow-lg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose ResumeForge?</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create a standout resume
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Multiple Templates</h3>
                <p className="text-muted-foreground">
                  Choose from Modern, Professional, and Creative designs
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Preview</h3>
                <p className="text-muted-foreground">See changes instantly as you type</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Export Options</h3>
                <p className="text-muted-foreground">Download as PDF or PNG with one click</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Intuitive interface with no learning curve
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div
            className="rounded-3xl p-12 space-y-6"
            style={{ background: "var(--gradient-hero)" }}
          >
            <h2 className="text-4xl font-bold">Ready to Build Your Resume?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands who've created professional resumes with ResumeForge
            </p>
            <Link to="/builder">
              <Button size="lg" style={{ background: "var(--gradient-primary)" }}>
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 ResumeForge. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
