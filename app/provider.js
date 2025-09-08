"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import { useEffect , useState} from 'react'
import  UserDetailContext  from './_context/UserDetailContext'



function Provider({children}) {
    const {user}=useUser();
    const [userDetail,setUserDetail]=useState([]);
    useEffect(() => {
        user&&VerifyUser();
    },[user])
    const VerifyUser = async () => {
        const dataResult = await axios.post('/api/verify-user', {user:user})
     
        setUserDetail(dataResult.data.result);
    }
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}><div>{children}</div></UserDetailContext.Provider>
    
  )
}

export default Provider;