import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({ flag, dataFoods, scrollValue }) => {
  const rowContainer = useRef()

  const [items, setItems] = useState([])

  const [{ cartItems }, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    })
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  }, [scrollValue])

  useEffect(() => {
    addToCart()
  }, [items])
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-4 my-12 scroll-smooth ${
        flag
          ? 'overflow-x-scroll hide-scrollbar'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {dataFoods && dataFoods.length > 0 ? (
        dataFoods.map((item) => {
          return (
            <div
              key={item.id}
              className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-[245px]  bg-[rgba(256,256,256,0.4)] rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-xl flex flex-col items-center justify-between'
            >
              <div className='w-full flex items-center justify-between'>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className='w-40 h-40 -mt-8 drop-shadow-2xl'
                >
                  <img
                    src={item?.imageURL}
                    alt=''
                    className='w-full h-full object-contain'
                  />
                </motion.div>

                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className='w-8 h-8 rounded-full bg-red-700 flex items-center justify-center cursor-pointer hover:shadow-md'
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className='text-white' />
                </motion.div>
              </div>

              <div className='w-full flex flex-col  items-end justify-end'>
                <p className='text-slate-700 font-semibold text-base md:text-lg'>
                  {item?.title}
                </p>
                <p className='mt-1 text-sm text-gray-500'>
                  {item?.calories} Calories
                </p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-slate-700 font-semibold'>
                    <span className='text-sm text-red-500'>$</span>{' '}
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <div className='w-full flex flex-col items-center justify-center'>
          <img src={NotFound} alt='' className='h-340' />
          <p className='text-lg text-slate-800 font-semibold my-4 '>
            Items Not Available
          </p>
        </div>
      )}
    </div>
  )
}

export default RowContainer
