import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCardProps } from './types'
import { ButtonOne } from '../Button'

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEditClick
}) => {
  const navigate = useNavigate()
  const [imageSrc, setImageSrc] = useState(product.cover_image)

  const handleNavigate = () => {
    navigate(`/shop/${product.id}`)
  }

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onEditClick) {
      onEditClick()
    }
  }

  const handleMouseEnter = () => {
    if (product.sub_images && product.sub_images.length > 0) {
      setImageSrc(product.sub_images[0])
    }
  }

  const handleMouseLeave = () => {
    setImageSrc(product.cover_image)
  }

  return (
    <div
      className="group rounded-lg cursor-pointer text-center"
      onClick={handleNavigate}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        alt={product.name}
        className="object-cover border border-gray-300 rounded-2xl mb-4 shadow-sm group-hover:shadow-lg transition-shadow"
        src={imageSrc}
      />
      <div className="flex justify-between px-1">
        <p className="text-sm text-gray-700 mb-2 tracking-wide w-3/4 text-left">
          {product.name}
        </p>

        <p className="text-gray-700 text-xs font-light w-1/4 text-right">
          ${Number(product.price / 100).toFixed(2)}
        </p>
      </div>
      {onEditClick && (
        <div className="p-4">
          <ButtonOne label="Edit" onClick={handleEditClick} />
        </div>
      )}
    </div>
  )
}
