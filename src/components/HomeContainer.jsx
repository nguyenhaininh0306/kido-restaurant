import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              alt='delivery'
              className='w-full h-full object-contain '
            />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-slate-800'>
          The Fastest Delivery in{' '}
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
            Your City
          </span>
        </p>

        <p className='text-base text-slate-800 text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          minima hic doloribus dolores nostrum labore consequatur at reiciendis
          iusto, aliquam ad possimus, dolorem soluta, quae odit atque unde
          temporibus? Quia!
        </p>

        <button
          type='button'
          className='bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
        >
          Order Now
        </button>
      </div>

      <div className='py-2 flex-1 flex items-center relative'>
        <img
          src={HeroBg}
          alt='hero-bg'
          className='ml-auto w-full h-[420px] lg:w-auto lg:h-[650px]'
        />

        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-48 py-4 gap-4 flex-wrap'>
          {heroData &&
            heroData.map((item) => {
              return (
                <div
                  key={item.id}
                  className='  lg:w-[190px] p-4 bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'
                >
                  <img
                    src={item.imageSrc}
                    alt='I1'
                    className='w-20 -mt-10 lg:w-40 lg:-mt-20 rounded-md p-2'
                  />
                  <p className='text-base lg:text-xl font-semibold text-slate-800 mt-2 lg:mt-4'>
                    {item.name}
                  </p>

                  <p className='text-[12px] lg:text-sm text-[#9ca0ab] font-semibold my-1 lg:my-3'>
                    {item.desc}
                  </p>

                  <p className='text-sm font-semibold text-slate-800'>
                    <span className='text-xs text-red-600'>$</span> {item.price}
                  </p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
