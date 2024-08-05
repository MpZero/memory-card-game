const Card = (props) => {
  const data = props;
  const image = data.image;
  const handleCardClick = data.handleClick;

  return (
    <div className="card" onClick={() => handleCardClick(image)}>
      <p>{image.name}</p>
      <img
        src={image.sprites.other["official-artwork"].front_default}
        alt={image.name}
      />
    </div>
  );
};

export default Card;
