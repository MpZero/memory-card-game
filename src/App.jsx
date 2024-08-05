import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.css";

function App() {
  const [images, setImages] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    const pokemonNames = [
      "venusaur",
      "charizard",
      "blastoise",
      "pikachu",
      "snorlax",
      "scyther",
      "heracross",
      "nidoking",
      "gengar",
      "mewtwo",
      "vaporeon",
      "gyarados",
    ];
    const fetchData = async () => {
      const requests = pokemonNames.map((name) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) =>
          response.json()
        )
      );
      const results = await Promise.all(requests);
      setImages(results);
    };

    fetchData();
  }, []);

  const handleCardClick = (image) => {
    if (clickedImages.includes(image.id)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setScore(score + 1);
      setHighScore(Math.max(score + 1, highScore));
      setClickedImages([...clickedImages, image.id]);
    }
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Main images={images} handleCardClick={handleCardClick} />
    </>
  );
}

export default App;
