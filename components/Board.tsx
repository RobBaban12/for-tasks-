import Image from 'next/image';

 function Board() {
  return (
    <div className='flex flex-col items-center justify-center p-5 rounded-b-2x' style={{ minHeight: '400px' }}>
   
   <div className="mb-4 w-96 h-64">
     
      <Image
        src="/carMotor.gif"
        alt="rideme"
        width={370}
        height={200}
        className=" pd-10 md:pb=0 object-contain"
      />
    </div>
    
    <div>
        <form className='flex items-center space-x-5 rounded-md p-2 shadow-md
        flex-1 md:flex-initial bg-blue-400 hover:bg-blue-500 active:bg-blue-300  transition-transform transform 
        hover:translate-y-0 active:translate-y-1 focus:outline-none focus:ring-2
         focus:ring-blue-300'>
        <button  type='submit'  className='text-white font-bold font-sans'>Start your journey</button>
        </form>
    </div>
      
        


    
   
  </div>
  
  
  );
};
export default Board; 
