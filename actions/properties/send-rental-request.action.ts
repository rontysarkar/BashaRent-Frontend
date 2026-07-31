'use server'

import { getAccessToken } from "@/services/access-token.service"
import { redirect } from "next/navigation";


export const sendRentalRequestAction =async(propertyId:string)=>{

    const accessToken = await getAccessToken();
    if(!accessToken){
        redirect('/login')
    }
    const payload = {propertyId};
    
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals/`,{
        method:"POST",
        headers:{
            Cookie:`accessToken=${accessToken}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
        
    })

    const result = await res.json();
    return result
}