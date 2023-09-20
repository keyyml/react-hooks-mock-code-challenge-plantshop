import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantArr, setSearch,  searchResult, setPlantArr }) {

  return (
    <main>
      <NewPlantForm setPlantArr={setPlantArr} plantArr={ plantArr } />
      <Search setSearch={ setSearch }/>
      <PlantList  plantArr={ plantArr } searchResult={ searchResult }/>
    </main>
  );
}

export default PlantPage;
