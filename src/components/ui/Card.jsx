import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

function Card({image, title, products, mainText, buttonText, buttonLink}) {
  return (
    <article className='flex flex-col gap-5 items-start justify-center w-full bg-primary-light-gray p-6 rounded-3xl'>
        <img src={image} alt={`Imagen de ${title}`} className='h-14' />
        <h3 className='text-2xl font-bold text-primary-dark'>{title}</h3>
        <h3 className='text-1xl text-primary-dark'>{products}</h3>
        <p>{mainText}</p>
        <a href={buttonLink} className='flex items-center justify-center gap-2 text-white bg-primary-gray hover:text-primary hover:bg-primary-dark transition-colors cursor-pointer rounded-3xl py-3 px-6 h-11'>
        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          {buttonText}
        </a>
    </article>
  )
}

export default Card