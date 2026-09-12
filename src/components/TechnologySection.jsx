import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TechnologyCard } from "./TechnologyCard";
import { YourStack } from "./YourStack";

export const TechnologySection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.info(`${technology.name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);
    toast.info("All technologies removed from your stack!");
  };

  if (loading) {
    return (
      <section
        id="technologies"
        className="flex min-h-[400px] items-center justify-center bg-white"
      >
        <p className="text-sm text-gray-500">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="bg-white py-16 lg:py-0"
    >
      <div className="mx-auto max-w-[1370px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Pick the right technologies and build your ideal development stack.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                selectedStack={selectedStack}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <YourStack
              selectedStack={selectedStack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};