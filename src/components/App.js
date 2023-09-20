import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantArr, setPlantArr] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlantArr(data))
  }, [])
  
  const [search, setSearch] = useState("")

  const searchResult = plantArr.filter((plant) => {
    return(
      plant.name.toLowerCase().includes(search.toLowerCase())
    )
  })
  
  return (
    <div className="app">
      <Header />
      <PlantPage setPlantArr={setPlantArr}searchResult={ searchResult }plantArr={ plantArr } setSearch={ setSearch }/>
    </div>
  );
}

export default App;
