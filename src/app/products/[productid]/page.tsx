"use client"
import React from "react"
import { useRouter } from "next/navigation"
export default function productid({params}:{
    params:{productid:string}
}){
    const router = useRouter()
    const handleClick = ()=>{
        const reviewid = '1'
 router.push(`/products/${params.productid}/reviews/${reviewid}`)
   }
   const handleClick1 = ()=>{
    const reviewid1 = '2'
 router.push(`/products/${params.productid}/reviews/${reviewid1}`)
   }
   const handleClick2 = () =>{
    const reviewid1 = '3'
 router.push(`/products/${params.productid}/reviews/${reviewid1}`)
   }
       return(
        <div className="backgw">
            <h1> about product {params.productid}...</h1>
            <br/>
            <p>Below are the reviews about the product click them to open.</p>
            <br />
            <button className="text-xl text-blue-800" onClick ={handleClick}>Open Review 1</button>
            <br />
            <button className="text-xl text-blue-800" onClick ={handleClick1}>Open Review 2</button>
            <br />
            <button className="text-xl text-blue-800" onClick = {handleClick2}>Open Review 3</button>
        </div>
    )
}
export function productid1({params}:{
    params:{productid:string}
}){
    const router = useRouter()
    const handleClick = ()=>{
        const reviewid = '2'
 router.push(`/products/${params.productid}/reviews/${reviewid}`)
    }
    return(
        <div>
            <h1> about product {params.productid}...</h1>
            <button onClick ={handleClick}>Open Review 2</button>
        </div>
    )
}