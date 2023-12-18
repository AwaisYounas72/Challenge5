import { useEffect, useState } from "react";
import Cards from "./Card/Cards"
import Pagination from '@mui/material/Pagination';

const Products = () => {
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)

    const TotalProducts = async() =>{
        const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
            method: "get"
        })
        const data = await res.json()
        setTotalPages(Math.floor(data.length/10))
        console.log(Math.floor(data.length/10))
    }
    const fetchProducts = async (num) => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${num*10}&limit=10`, {
            method: "get"
        })
        const data = await res.json()
        setProducts(data)
        console.log(data)
    }

    
    useEffect(() => {
        TotalProducts()
        fetchProducts(1)
    }, [])

    const handlePaginationNumber = (e) =>{
        setPage(e.currentTarget.textContent)
    }

    // Handle Pagination
    const handlePagination = () =>{
        fetchProducts(page)
    }
    return (
        <div className='w-full min-h-screen flex flex-col items-start justify-center  py-8 '>
            <div className="my-14">
            <h1 className=" text-4xl font-bold">Shopping</h1>
            </div>
            <Cards products={products} />
            <div className="w-full flex justify-center my-8">
                <Pagination count={totalPages} shape="rounded" onClick={handlePagination} onChange={handlePaginationNumber} />
            </div>
        </div>
    )
}

export default Products