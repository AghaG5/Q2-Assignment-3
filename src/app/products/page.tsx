import Link from "next/link"
export default function Products(){
    return(
        <div>
            <h1>This is the products page</h1>
            <br />
            <h1>Product 1</h1>
            <h1>Product 2</h1>
            <h1>Product 3....</h1>
            <br />
            <Link href = "/products/1">Open product 1</Link>
            <br />
            <Link href = "/products/2">Open product 2</Link>
            <br />
            <Link href = "/products/3">Open product 3</Link>
        </div>
    )
}