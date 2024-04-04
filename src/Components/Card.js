import React from 'react';
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

export const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative' >
        <div className='absolute top-[-7rem] z-[10]  mx-auto '>
            <img className='w-[140px] h-[140px] aspect-square rounded-full z-[25]' src={review.image} alt='img'/>
            <div className='w-[140px] h-[140px] rounded-full bg-violet-500 top-[-6px] left-[6px] z-[-10] absolute'></div>
        </div>

        <div className='text-center mt-7'> 
            <p className='text-2xl font-bold capitalize'>{review.name}</p>
        </div>

        <div className='mt-2 text-center'>
            <p className='text-sm uppercase text-violet-500'>{review.job}</p>
        </div>

        <div className='mx-auto mt-5 text-violet-400'><FaQuoteLeft /></div>


        <div className='mt-4 font-medium text-center text-slate-500'>
            <p>{review.text}</p>
        </div>
        
        <div className='mx-auto mt-5 text-violet-400'><FaQuoteRight/></div>

       
    </div>
 )
}
