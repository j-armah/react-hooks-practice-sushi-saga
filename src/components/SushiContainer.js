import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, emptyPlateAdd, money}) {
  const [sushiStart, setSushiStart] = useState(0)
  const [sushiEnd, setSushiEnd] = useState(4)
  

  const sushiArray = sushis.map(sushi => 
    <Sushi key={sushi.id} sushi={sushi} emptyPlateAdd={emptyPlateAdd} money={money}/>
  )

  const handleMoreSushi = () => {
    setSushiStart(sushiStart => sushiStart + 4)
    setSushiEnd(sushiEnd => sushiEnd + 4)
  }


  
  
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiArray.slice(sushiStart,sushiEnd)}
      <MoreButton moreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
