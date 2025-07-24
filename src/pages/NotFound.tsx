import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-8 fade-in">
        <div className="space-y-4">
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary/20">404</h1>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="btn-hero group"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-5 w-5" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
