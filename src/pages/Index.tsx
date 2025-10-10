import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Utensils, Clock, ShoppingBag, Sparkles } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('quickbite-current-user');
    if (currentUser) {
      navigate('/menu');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <nav className="container px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary">
            <Utensils className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            QuickBite
          </span>
        </div>
        
        <div className="flex gap-3">
          <Link to="/signin">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Fast & Delicious
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Order Food
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                In Minutes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Skip the queue and pre-order your favorite meals. Fresh, fast, and ready when you are!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                Create Account
              </Button>
            </Link>
            <Link to="/signin">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-2xl bg-background/60 backdrop-blur border hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Ordering</h3>
              <p className="text-muted-foreground">
                Browse menu and add items to your cart with just a tap
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background/60 backdrop-blur border hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Save Time</h3>
              <p className="text-muted-foreground">
                Skip the long queues and pick up your order when it's ready
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background/60 backdrop-blur border hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Utensils className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fresh Food</h3>
              <p className="text-muted-foreground">
                Every meal is prepared fresh with quality ingredients
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
