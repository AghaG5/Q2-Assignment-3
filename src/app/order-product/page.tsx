"use client"
import { useRouter } from "next/navigation";
export default function order(){
    const router = useRouter()
    const handleClick = () =>{
        console.log("Placing your order")
        router.push("/products")        
    }
    return(
        <div>
            <h1>Order your product</h1>
            <br />
            <button onClick={handleClick}>place order</button>
        </div>
    )
}