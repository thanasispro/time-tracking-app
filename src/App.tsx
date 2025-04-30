import React from "react";
import Profile from "./components/Profile";
import Card from "./components/Card";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState("Weekly");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-navy-950 lg:h-screen">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:flex-row lg:items-start lg:space-x-8 lg:space-y-0 lg:w-full lg:max-w-[1100px]">
      <Profile
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-8 flex-grow lg:min-h-[520px]">
        {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          icon={item.icon}
          timeframes={item.timeframes}
          activeTimeframe={
          activeButton.toLowerCase() as "daily" | "weekly" | "monthly"
          }
          backgroundColor={item.backgroundColor}
        />
        ))}
      </div>
      </div>
    </main>
  );
};

export default App;
