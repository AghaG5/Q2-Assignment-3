"use client"
import { useRouter } from "next/navigation"
export default function productid({params}:{
    params:{productid:string}
}){
    const router = useRouter()
    const handleClick = ()=>{
        const reviewid = '1'
  router.push(`products/${params.productid}/reviews/${reviewid}`)
    }
    return(
        <div>
            <h1> about product {params.productid}...</h1>
            <button onClick ={handleClick}>Open Reviews</button>
        </div>
    )
}