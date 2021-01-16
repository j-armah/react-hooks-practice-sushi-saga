import React, {useState} from "react";

function Sushi({ sushi, emptyPlateAdd, money }) {
  const [sushiEaten, setSushiEaten] = useState(false)
  const {name, img_url, price} = sushi

  function handleSushiClick() {
    if (money - sushi.price < 0) {
      alert("not enough money playa")
    } else {
      setSushiEaten(true)
      emptyPlateAdd(sushi)
    }
  }
  
  //console.log(sushi)
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
