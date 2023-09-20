import Image from 'next/image';

function Header() {
  return (
    <header>
   <div className='flex flex-col md:flex-row item-center p-5  rounded-b-2xl'>
   <div
        className='absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-blue-400
        to-white
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50

        '
   />
 
    <Image
    src="/Ridemelogo.svg"
    alt="Ridemelogo"
    width={250}
    height={100}
    />

<div className=" flex  overflow-hidden  p-6 sm:py-12  items-center space-x-5 rounded-md 
        flex-1 md:flex-initial absolute top-10 right-10">


      <form action="" className="relative mx-auto w-max " title='Search'>
        <input type="search" placeholder='Find your place'
              className="text-center  peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-blue-500 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-12 w-14 border-r border-transparent stroke-blue-500 px-3.5 peer-focus:border-blue-500 peer-focus:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


</div>
  
   
   
   
   
    </div>
    <div className='flex items-center justify-center px-5 md:py-5 py-2 font-mono font-semibold outline-none'>
        <p className='flex items-center p-5 shadow-xl rounded-xl w-fit
         bg-white italic max-w-3xl'>
       "Explore your City, Ride with Ease it's all about RIDEme"
        </p>
    </div>
    </header>


  )
}

export default Header 