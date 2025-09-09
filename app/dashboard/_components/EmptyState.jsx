import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function EmptyState() {
  return (
    <div className="flex items-center justify-center mt-3 flex-col">
        <Image src={"/placeholder.jpeg"} width={300} height={300} alt="empty"/>
        <h2 className="font-medium text-lg text-gray-500 mt-2">Create New AI Interior Design for your room</h2>
          <Link href="/dashboard/create-new">
        <button className="mt-5 bg-purple-600 text-white py-2 px-4 rounded-2xl">+ Redesign Room</button>
        </Link>
    </div>
  )
}

export default EmptyState