import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCardProps } from '../../types'

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const price = Number(product.price)
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/shop/${product.id}`)
  }

  return (
    <div
      className="group rounded-lg shadow-sm hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <img
        alt={product.name}
        className="w-full h-84 object-cover mb-2 rounded"
        src={product.cover_image}
      />
      <h2 className="text-md font-serif px-4 group-hover:underline">
        {product.name}
      </h2>
      <p className="text-gray-500 font-serif font-thin tracking-wider text-sm px-4 mb-2">
        Evera
      </p>
      <p className="text-gray-700 mb-4 text-sm font-serif font-light">
        ${price.toFixed(2)}
      </p>
    </div>
  )
}

export default ProductCard
