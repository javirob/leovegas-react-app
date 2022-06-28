const Message = ({ gamesData }) => {
  if (gamesData.length === 0) {
    return (
      <section className='max-w-[800px] mx-auto  px-5 flex flex-col text-center '>
        <div className='py-1 w-[100%]  mx-auto my-4 bg-gradient-to-r from-gray-500 to-blue-900 rounded-md flex flex-col justify-center items-center'>
          <h2 className='text-white text-md md:text-lg bold'>No results</h2>
        </div>
      </section>
    );
  }

  return (
    <section className='max-w-[800px] mx-auto  px-5 flex flex-col text-center '>
      <div className='py-1 w-[100%]  mx-auto my-4 bg-gradient-to-r from-gray-500 to-blue-900 rounded-md flex flex-col justify-center items-center'>
        <h2 className='text-white text-md md:text-lg bold'>{gamesData.length} games</h2>
      </div>
    </section>
  );
};

export default Message;
