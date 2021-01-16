import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(50)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        //console.log(data)
        setSushis(data)
      })
  }, [])

  function handleSushiEaten(sushi) {
    setPlates([...plates, sushi])
    setMoney(money => money - sushi.price)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} emptyPlateAdd={handleSushiEaten} money={money}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
