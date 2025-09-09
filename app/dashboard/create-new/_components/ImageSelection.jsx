"use client"

import React,{useState} from 'react'
import Image from "next/image";

function ImageSelection({selectedImage}) {
const [file, setFile]=useState();
    const onFileSelected =(event)=>{
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])
    }
  return (
    <div>
        <label>Select image of your room</label>
        <div className={"mt-3"}>
            <label htmlFor='upload-image'>
                <div className={'p-28 border rounded-xl border-dotted flex justify-center border-purple-600 cursor-pointer hover:shadow-lg ${file && "p-0 bg-white"}'}>
                   {!file? <Image src={"/image-uploader.jpeg"} width={200} height={200} alt="upload" />
                   :<Image src={URL.createObjectURL(file)} width={200} height={200} alt="upload" className="w-[300px] h-[300px] object-cover"/>}
                </div>
            </label>
            <input type="file" accept="image/*" id="upload-image" style={{display:"none"}} onChange={onFileSelected}/>
        </div>
    </div>
  )
}

export default ImageSelection