import { NextResponse } from "next/server"
export async function POST(req){
    const {image,roomType,designType,additionalReq}=await req.json();
    return NextResponse.json({result:"success"})
}