import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from "@global/layout";
import React, { useState } from 'react';


export default function Login() {

    const [tipoPassCliente, setTipoPassCliente] = useState('password');

    var eye =   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>;


    var eyes_off =  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>;
    return (
        <Layout widthPadding={false}>
            <Head>
                <title>Inicio de Sesión | {siteTitle}</title>
            </Head>
                <div className='relative'>
                    <div className="grid grid-cols-1 divide-y h-screen">
                        <div className='bg-mk-blue'>
                        </div>
                        <div className=''>
                        </div>
                        <div className=" pt-52  w-full flex  justify-center  absolute">
                            <div className=" p-6 w-96 bg-white rounded-3xl border border-gray-200 shadow-xl ">
                                <div className='text-center text-2xl text-black py-4'>
                                    <b>Iniciar Sesión</b> 
                                    <div className='text-center  text-xs py-4'>
                                        <span >Si no tienes una cuenta, 
                                        <Link href="../registro">
                                            <a> <span className='text-sky-500'>Regístrate aquí</span></a>
                                        </Link>
                                            </span>
                                    </div>
                                </div> 
                                <div id="myTabContent"> 
                                    <div className=' w-full'>
                                            <div className="grid grid-cols-1 gap-1 p-4  w-full"  > 
                                                <div className="mb-6">
                                                    <input type="text" id="txtC_documento" autoComplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Correo*"  />
                                                </div>  
                                                <div className="mb-6 col-start-1   ">
                                                    <label className="relative block">
                                                        <span className="absolute inset-y-0 right-3 flex items-center pl-2" onClick={()=>setTipoPassCliente(tipoPassCliente=='password' ? 'text':'password') }>
                                                            {tipoPassCliente=='password' ? eye:eyes_off}
                                                        </span>
                                                        <input type={tipoPassCliente} placeholder="Contraseña*" name="password" id="password" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg text-sm   block w-full  shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                                                    </label>
                                                </div> 
                                            </div>
                                        </div>
                                </div>

                                <div className='text-center text-sm'>
                                    <div className="py-5 ">
                                        <button  type="button" className="rounded-xl bg-mk-blue hover:bg-sky-700 text-white text-sm py-3 px-4  w-64  focus:outline-none focus:shadow-outline">
                                            Iniciar Sesión
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <br/><br/><br/><br/>
                
        </Layout>
    );
}
