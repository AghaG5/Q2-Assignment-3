export default function reviewid({params}:{
    params:{
        productid : string,
        reviewid: string
    }
}){
    return(
     <div>
        <h1>Review {params.reviewid} for Product {params.productid}</h1>
     </div>
    )
}