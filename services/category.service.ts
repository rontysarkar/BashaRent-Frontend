"use server"


export const getCategories =async () =>{


    const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`,{
        next:{
            revalidate:60*60*24*7,
            tags:['categories']
        }
    })

    const result = await res.json();
    return result;
}