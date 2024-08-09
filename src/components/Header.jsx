const Header = (props) => {
  const data = props;
  const score = data.score;
  const highScore = data.highScore;
  return (
    <>
      <header>
        <h1>Pokémon Memory Card Game!</h1>
        <h2>
          Get points by clicking on a pokémon but don&apos;t click on any more
          than once!
        </h2>
        <div className="score-wrapper">
          <p>Score: {score}</p>
          <p>Highscore: {highScore}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
