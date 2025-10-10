import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import burgerImg from '@/assets/burger.jpg';
import friesImg from '@/assets/fries.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import saladImg from '@/assets/salad.jpg';
import drinkImg from '@/assets/drink.jpg';
import dessertImg from '@/assets/dessert.jpg';

const menuItems = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    price: 8.99,
    image: burgerImg,
  },
  {
    id: '2',
    name: 'Crispy Fries',
    description: 'Golden, crispy french fries seasoned to perfection',
    price: 3.99,
    image: friesImg,
  },
  {
    id: '3',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, and tomato sauce on a thin crust',
    price: 12.99,
    image: pizzaImg,
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with croutons, parmesan, and Caesar dressing',
    price: 7.99,
    image: saladImg,
  },
  {
    id: '5',
    name: 'Fresh Lemonade',
    description: 'Refreshing homemade lemonade with real lemons',
    price: 2.99,
    image: drinkImg,
  },
  {
    id: '6',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie topped with vanilla ice cream',
    price: 5.99,
    image: dessertImg,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const currentUser = localStorage.getItem('quickbite-current-user');
    if (!currentUser) {
      navigate('/signin');
    }
  }, [navigate]);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious meals crafted with love and fresh ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleAddToCart(item)} 
                  className="w-full"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
