import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {addToCart, cartItem} = useCart()

       console.log(cartItem)
    
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-card-image"
        onClick={()=>navigate(`/products/${product.id}`)}
      />
      <h1 className='line-clamp-2 product-card-title'>{product.title}</h1>
      <p className="product-card-price">$<span>{product.price}</span></p>
      <button
        onClick={()=>addToCart(product)}
        className="product-card-button"
      >
        <IoCartOutline className="product-card-button-icon" /> Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
