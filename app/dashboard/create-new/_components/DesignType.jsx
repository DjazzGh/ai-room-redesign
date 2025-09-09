import React ,{useState}from 'react'
import Image from "next/image";

function DesignType({selectedDesignType}) {
    const Designs=[
        {
            name:"Modern",
            image:"design1"
        },
        {
            name:"Industrial",
            image:"design1"
        },
        {
            name:"Bohemian",
            image:"design1"
        },
        {
            name:"Traditional",
            image:"design1"
        },
        {
            name:"Rustic",
            image:"design1"
        },
        {
            name:"Minimalist",
            image:"design1"
        },
    ]
    const [selectedOption, setSelectedOption]=useState();
  return (
    <div className="mt-5">
        <label className="text-gray-500">Select Interior Design Type</label>
        <div className=" mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Designs.map((design,index)=>(
                <div key={index} onClick={()=>{setSelectedOption(design.name); selectedDesignType(design.name)}}>
<Image
  src={design.image}
  width={100}
  height={100}
  alt="design"
  className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
    selectedOption === design.name ? 'border-2 border-purple-600 rounded-md p-1' : ''
  }`}
/>
                    <h2>{design.name}</h2>
                </div>

            ))}
        </div>
    </div>
  )
}

export default DesignType