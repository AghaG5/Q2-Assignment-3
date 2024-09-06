import Link from "next/link"
export default function Products(){
    return(
        <div className="backgw">
            <h1>
                This is the products page
            </h1>
            <br />
            <div >
            <p >
                Product 1</p>
            <p>
                Product 2</p>
            <p>
                Product 3....</p>
            </div>
            <br />
            <div className="text-xl text-blue-800">
            <Link href = "/products/1">Open product 1</Link>
            <br />
            <Link href = "/products/2">Open product 2</Link>
            <br />
            <Link href = "/products/3">Open product 3</Link>
            </div>
        </div>
    )
}