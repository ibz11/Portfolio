import React from 'react';


function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
           <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Ibrahim</h1> 
           <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
           <p className="text-sm max-w-xl mb-6 font-bold" >This is my Bio</p>
           <a
                  href="https://drive.google.com/file/d/1aSvBVBxR5lsPUZ-w5YM7x6OrNUBarnlk/view?usp=sharing" 
                  target="_blank"
                  type="button"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                My Resume
               </a>
{/*           
           <button
                  type="button"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  My Resume
               </button> */}
           </div>
    )
}
export default Intro;