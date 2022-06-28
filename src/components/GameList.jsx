import GameItem from './GameItem';

const GameList = ({ gamesData }) => {
  return (
    <section className='max-w-[1100px] mx-auto py-4 px-2 md:px-5'>
      <div className='flex flex-wrap justify-evenly md:justify-center gap-1 mt-2'>
        {gamesData.map((item, index) => (
          <GameItem key={index} gameData={item} />
        ))}
      </div>
    </section>
  );
};

export default GameList;
