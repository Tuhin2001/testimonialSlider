import React, { useState } from 'react';
import { Card } from './Card';

import {FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index,setIndex] = useState(0);
  function leftShiftHandler(){
    if(index -1 < 0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    if(index + 1 >= reviews.length ){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }
  function surprizeHandler(){
    let randomIndex =  Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vh] hover:shadow-2xl md:w-[700px] bg-white flex flex-col justify-center items-center mt-14 p-10 transition-all duration-700 shadow-md">
      <Card review={reviews[index]}></Card>
       
      <div className='flex items-center justify-center gap-4 mx-auto mt-5 text-3xl font-bold text-violet-400'>
          <button onClick={leftShiftHandler}
           className='cursor-pointer hover:text-violet-600'><FaChevronLeft /></button>

          <button onClick={rightShiftHandler}
           className='cursor-pointer hover:text-violet-600'><FaChevronRight /></button>
      </div>

      <div className='py-8 mx-auto text-center'>
          <button onClick={surprizeHandler}
           className="px-10 py-2 mx-auto text-lg font-bold text-white transition-all duration-200 rounded-md cursor-pointer bg-violet-400 hover:bg-violet-500 ">
              Surprize me
          </button>
    </div>
    </div>
  )
}
