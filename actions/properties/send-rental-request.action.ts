'use server'

import { getAccessToken } from "@/services/access-token.service"
import { redirect } from "next/navigation";


export const sendRentalRequestAction =async(propertyId:string)=>{

    const accessToken = await getAccessToken();
    if(!accessToken){
        redirect('/login')
    }
    console.log(accessToken)
}