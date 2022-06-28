const Header = ({ text }) => {
  return (
    <header className='h-[80px] w-full bg-gradient-to-r from-gray-800 to-black flex justify-center items-center border-b'>
      <h1 className='text-white text-2xl font-bold cursor-pointer tracking-widest'>{text}</h1>
    </header>
  );
};

export default Header;
