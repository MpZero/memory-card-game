const Card = (props) => {
  const data = props;
  const image = data.image;
  const handleCardClick = data.handleClick;

  return (
    <div className="card" onClick={() => handleCardClick(image)}>
      <div className="card-name-wrapper">
        <p>{image.name[0].toUpperCase() + image.name.slice(1)}</p>
      </div>
      <img
        src={image.sprites.other["official-artwork"].front_default}
        alt={image.name}
      />
    </div>
  );
};

export default Card;
