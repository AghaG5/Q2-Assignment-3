"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function order(){
    const router = useRouter()
    const handleClick = () =>{
        console.log("Placing your order")
        router.push("/")        
    }
    return(
        <div className="backgw">
            <h1 >Order your product</h1>
            <br />
            <p>Obviously this is just an assignment so im using a hook on placing order by pressing it you wil go the home page. </p>
            <br />
            <Button onClick={handleClick}>place order</Button>
        </div>
    )
}