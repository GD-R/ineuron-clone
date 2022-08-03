import React from 'react'

const ProgramCard = (props) => {
    
    const { person, title, img } = props


  return (
    <>
      <div style={{ backdropFilter: "blur(5px)"}}  className="backdrop inline-block m-4 w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-black border border-blue shadow-lg">
      
      <div className="w-full mb-3 pb-3 border-b border-1 border-blue">
        <h4 style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)"}} className="text-xl font-semibold text-shadow">{person}</h4>
      </div>
     
      <div>
        <img src={img} alt="image2" className="w-full h-48 object-cover mb-2"/>
        <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)"}} className="mb-3 tracking-wide text-base text-shadow">
          {title}
        </p>
        <button className="backdrop bg-yellow bg-opacity-0 border border-blue px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
          Detail
        </button>
      </div>
    </div>
    </>
  )
}

export default ProgramCard
