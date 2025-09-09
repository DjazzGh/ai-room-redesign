"use client"

import React,{useState} from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'

function CreateNew() {
    const [formData, setFormData]= useState([])
    const onHandleInputChange=(value, fieldName)=>{
        setFormData(prev=>({
            ...prev,
            [fieldName]:value
        }))
        console.log(formData)
    }
  return (
    <div>
        <h2 className="font-bold text-4xl text-center text-primary">Experience The Magic of AI Remodeling</h2>
        <p className="text-center text-gray-500">Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <ImageSelection selectedImage={(value)=>onHandleInputChange(value,"image")}/>
                <div>
                    <RoomType selectedRoomType={(value)=>onHandleInputChange(value,"roomType")}/>
                        <DesignType selectedDesignType={(value)=>onHandleInputChange(value,"designType")}/>
                        <AdditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value,"additionalReq")}/>
                            <button className="bg-purple-600 text-white py-2 px-4 rounded-2xl w-full">Generate</button>
                            <p className="text-sm text-gray-500 mb-52">NOTE: 1 Credit will be used to redesign your room</p>
                </div>
        </div>
    </div>
  )
}

export default CreateNew
