import { LazyLoadImage } from 'react-lazy-load-image-component';

const GameItem = ({ gameData }) => {
  return (
    <article className='inline-block m-2 md:m-4 group '>
      <div className='flex flex-col justify-center items-center '>
        <div style={{ borderRadius: '10%' }} className='w-[130px] h-[90px]  sm:w-[160px] sm:h-[120px] inline-block cursor-pointer relative drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)] '>
          <a href={gameData.gamePreviewUrl} target='_blank' rel='noreferrer'>
            <LazyLoadImage
              src={gameData.img}
              alt={gameData.gameName}
              style={{ borderRadius: '10%' }}
              className='w-full h-auto block object-fit cursor-pointer ease-in-out duration-300 hover:scale-[105%] '
            />
          </a>
        </div>
        <h4 className='group-hover:underline text-center py-1 text-white tracking-tight text-xs md:text-sm '>
          {gameData.gameName.length > 22 ? `${gameData.gameName.slice(0, 20)}...` : gameData.gameName}
        </h4>
      </div>
    </article>
  );
};

export default GameItem;
