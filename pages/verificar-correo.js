import Link from 'next/link'
import React from 'react'

export default function VerificarCorreo() {
  return (
    <body className='bg-mk-blue flex justify-center w-full'>
      <div className='flex justify-center items-center  mt-32 gap-6'>
        <img className=" w-64 left-52 top-36" src='../images/3d-fluency-blue-paper-plane.png'>
        </img>
        <div className='flex flex-col'>
          <p className='text-white font-bold py-3 top-36 text-2xl'>
            Revisa tu bandeja de entrada
          </p>
          <p className='tracking-wide  text-white '>Un link de inicio de secion se ha enviado a
            <br />tu direccion de correo.</p>
          <Link href="/">
            <a className="mt-10 bg-white w-72 h-10 rounded-full top-1/2 left-1/2 text-mk-blue text-xl font-medium shadow-md flex justify-center items-center">
              Ir a la pagina principal
            </a>
          </Link>
        </div>
      </div>
    </body>
  )
}
