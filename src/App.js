import React from "react";
import { Testimonial} from "./Components/Testimonial";
import reviews from "./data";

const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      {/* top-container*/}
      <div className="items-center justify-center text-center">

        {/* Heading */}
        <h1 className="text-4xl font-semibold ">Our Testimonials</h1>

        {/* Line under the heading */}
        <div className=" mx-auto bg-violet-400 h-[4px] w-3/5 mt-2"></div>
  

      </div>

      {/* Testimonials */}
      <Testimonial reviews={reviews}/>


    </div>
  )
};

export default App;
