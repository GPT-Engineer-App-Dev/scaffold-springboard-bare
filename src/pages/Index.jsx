import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  useEffect(() => {
    console.log("Index component mounted");
  }, []);

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl mb-4">Welcome to My App</h2>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter something..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={() => alert(`You entered: ${inputValue}`)}>
            Submit
          </Button>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
