import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../assets/empty-cart.png"

const Cart = ({location, getLocation}) => {
  const { cartItem , updateQuantity, deleteItem} = useCart()
  const navigate = useNavigate()
  

  const totalPrice = cartItem.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0'>
      {
        cartItem.length > 0 ? <div>
          <h1 className='font-bold text-2xl text-gray-900'>My cart ({cartItem.length})</h1>
          <div>
            <div className='mt-10 space-y-3'>
              {cartItem.map((item) => (
                <div key={item.id} className='bg-gray-100 p-5 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-4 w-full'>
                  <div className='flex items-center gap-4 w-full'>
                    <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md flex-shrink-0' />
                    <div>
                      <h1 className='md:w-[300px] line-clamp-2'>{item.title}</h1>
                      <p className='text-red-500 font-semibold text-lg'>${item.price}</p>
                    </div>
                  </div>
                  <div className='bg-red-500 text-white flex items-center justify-center gap-4 p-2 rounded-md font-bold text-xl self-start md:self-auto'>
                    <button onClick={()=>updateQuantity(cartItem, item.id, "decrease")} className='cursor-pointer'>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>updateQuantity(cartItem, item.id, "increase")} className='cursor-pointer'>+</button>
                  </div>
                  <span onClick={()=>deleteItem(item.id)} className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl self-start md:self-auto'>
                    <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer' />
                  </span>
                </div>
              ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
              <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
                <h1 className='text-gray-800 font-bold text-xl'>Delivery info</h1>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Full name</label>
                  <input type="text" placeholder='Enter your full name' className='p-2 rounded-md'/>
                </div>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Street address' className='p-2 rounded-md' value={location?.county}/>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='State' className='p-2 rounded-md w-full' value={location?.state}/>
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Postcode</label>
                    <input type="text" placeholder='Postcode' className='p-2 rounded-md w-full' value={location?.postcode}/>
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Country' className='p-2 rounded-md w-full' value={location?.country}/>
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Phone number</label>
                    <input type="text" placeholder='Enter your phone number' className='p-2 rounded-md w-full' />
                  </div>
                </div>
                <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Save address</button>
                <div className='flex items-center justify-center w-full text-gray-500 text-sm mt-2'>or</div>
                <div className='flex justify-center'>
                  <button onClick={getLocation} className='bg-white text-red-500 border border-red-200 hover:bg-red-50 px-3 py-2 rounded-md'>Use my current location</button>
                </div>
              </div>
              <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'>
                <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText /></span>Items total</h1>
                  <p>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><MdDeliveryDining /></span>Delivery charge</h1>
                  <p className='text-red-500 font-semibold'><span className='text-gray-600 line-through'>$25</span> FREE</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><GiShoppingBag /></span>Handling charge</h1>
                  <p className='text-red-500 font-semibold'>$5</p>
                </div>
                <hr  className='text-gray-200 mt-2'/>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg'>Grand total</h1>
                  <p className='font-semibold text-lg'>${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply promo code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter promo code' className='p-2 rounded-md w-full'/>
                    <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div> : <div className='flex flex-col gap-4 justify-center items-center h-[500px] px-4 text-center'>
          <h1 className='text-red-500/80 font-bold text-3xl md:text-5xl'>Your cart is empty</h1>
          <img src={emptyCart} alt="" className='w-56 sm:w-72 md:w-[400px]'/>
          <button onClick={()=>navigate('/products')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer '>Continue Shopping</button>
        </div>
      }
    </div>
  )
}

export default Cart
