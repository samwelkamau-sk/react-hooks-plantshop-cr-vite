import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // 1. Start with empty array
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={(newP) => setPlants([...plants, newP])} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {/* 2. Pass the array here */}
      <PlantList plants={displayedPlants} /> 
    </main>
  );
}

export default PlantPage;