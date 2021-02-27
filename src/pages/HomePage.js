import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/shopContext"

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {products.map((product) => (
        <Link to={`/products/${product.handle}`} key={product.title}>
          <p>{product.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
