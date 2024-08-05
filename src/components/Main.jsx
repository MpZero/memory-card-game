import Card from "./Card.jsx";

const Main = (props) => {
  const data = props;
  const images = data.images;
  const handleCardClick = data.handleCardClick;

  const shuffledImages = [...images].sort(() => 0.5 - Math.random());
  return (
    <main>
      <div className="card-wrapper">
        {shuffledImages.map((image, index) => (
          <Card key={index} image={image} handleClick={handleCardClick} />
        ))}
      </div>
    </main>
  );
};

export default Main;
