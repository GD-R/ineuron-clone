import React from 'react'

const WhyCard = (props) => {
  return (
    <>
      
            <div className="bg-blue w-[80%] md:w-[30%] rounded-lg overflow-hidden mb-10 flex flex-col justify-center items-center py-4">
               <img
                  src={props.img}
                  alt="image"
                  className="w-[200px]"
                  />
               <div className="p-4 text-center">
                  <h3 className=" font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block">
                     {props.title}</h3>
                  <p className="text-base text-body-color leading-relaxed">
                     {props.text}
                  </p>
               </div>
            </div>
    </>
  )
}

export default WhyCard
