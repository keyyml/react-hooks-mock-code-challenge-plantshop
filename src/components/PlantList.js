import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArr, searchResult }) {

  const plantstoDisplay = searchResult.map((plant) =>{
    return(
      <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
    )
  })
  return (
    <ul className="cards">{plantstoDisplay}</ul>
  );
}

export default PlantList;
