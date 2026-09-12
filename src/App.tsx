import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology): void => {
    const isAlreadyAdded = selectedStack.some(
      (item) => item.id === technology.id,
    );

    if (isAlreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);

      return;
    }

    setSelectedStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string): void => {
    const technology = selectedStack.find((item) => item.id === id);

    setSelectedStack((previousStack) =>
      previousStack.filter((item) => item.id !== id),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = (): void => {
    if (selectedStack.length === 0) {
      toast.warning("Your stack is already empty!");

      return;
    }

    setSelectedStack([]);

    toast.info("All technologies removed successfully!");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto w-[92%] max-w-[1400px]">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
              <TechnologyList
                technologies={technologies}
                selectedStack={selectedStack}
                loading={loading}
                onAdd={handleAddToStack}
              />

              <StackSidebar
                selectedStack={selectedStack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
