import { useState } from "react";
import Card from "../Card";

const Home = () => {
  const [palette, setPalette] = useState([]);
  if (!palette.length)
    fetch("http://localhost:8080/sorvetes")
      .then(res => res.json())
      .then(setPalette)
      .catch(err => console.log(err));
  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <div>
        {palette.map((element) => {
          return <Card key={element._id} palette={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;