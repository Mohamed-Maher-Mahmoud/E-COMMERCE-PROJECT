import React from 'react'
import imgError from './img/404-error-page-not-found.jpg'

export default function ErrorPage() {
  return (
    <div className=' bg-error text-center mx-auto"'>
        <img className='w-95' src={imgError} alt='errorPage'/>

    </div>
  )
}

