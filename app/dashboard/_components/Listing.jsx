"use client"
import React,{useState} from 'react'
import { useUser } from '@clerk/nextjs'
import EmptyState from './EmptyState';
import Link from 'next/link';

function Listing() {
    const {user}=useUser();
    const [userRoomList, setUserRoomList]= useState([]);
  return (
    <div>
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
            <Link href="/dashboard/create-new">
        <button className="bg-purple-600 text-white py-2 px-4 rounded-2xl">+ Redesign Room</button>
        </Link>
        </div>
        {userRoomList?.length==0?<EmptyState/>:<div>Found</div>}
    </div>
  )
}

export default Listing