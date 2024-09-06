export default function reviewid({params}:{
    params:{
        productid : string,
        reviewid: string
    }
}){
    return(
     <div className="backgw">
        <h1>Review {params.reviewid} for Product {params.productid}...</h1>
        <br />
       
        <p>This is the page where you find reviews about the product.</p>
     </div>
    )
}