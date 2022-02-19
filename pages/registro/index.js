import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from "@global/layout";
import React, { useState } from 'react';


export default function Login() {
    const [tipo_registro, setTipo] = useState('cliente');

    const [tipoPassCliente, setTipoPassCliente] = useState('password');
    const [tipoPassVendedor, setTipoPassVendedor] = useState('password');


    var eye =   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>;


    var eyes_off =  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>;
    return (
        <Layout home>
            <Head>
                <title>Inicio de Sesión | {siteTitle}</title>
            </Head>
                <div className='relative'>
                    <div className="grid grid-cols-1 divide-y h-screen     ">
                        <div className='bg-mk-blue'>
                            <div  className=' min-h-fit bg-mk-blue py-4 px-4'>
                                <div className=' flex'>
                                    <img
                                        className=" h-12  bg-slate-50 rounded-lg"
                                        src="../../images/cclamlogotipo.png"
                                        alt="Logo"
                                    />
                                    <span className='text-lg text-slate-50 py-2 px-2'><b>MarketPlace</b> </span>
                                </div>
                            </div>
                        </div>
                        <div className='  '>
                        </div>
                        <div className=" pt-16  w-full flex  justify-center  absolute">
                            <div className=" p-6 w-5/6 bg-white rounded-lg border border-gray-200 shadow-xl ">
                                <div className='text-center text-2xl text-black py-4'>
                                    <b>Registrarse</b> 
                                </div>
                                <div className=" w-ful flex justify-center py-3">
                                    <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                        <li className="mr-6 px-9 " role="presentation" id="cliente" onClick={()=>setTipo('cliente') } >
                                            <button  className={` inline-block py-0 px-4 text-xl font-medium text-center   rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-cyan-600 ${tipo_registro == 'cliente' ? 'border-cyan-600':''}   text-gray-600  active`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cliente</button>
                                        </li>
                                      
                                        <li className="mr-4 px-9" role="presentation" id="vendedor" onClick={()=>setTipo('vendedor') }>
                                            <button className={`inline-block py-0 px-4 text-xl font-medium text-center   rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-cyan-600 ${tipo_registro == 'vendedor' ? 'border-cyan-600':''}  text-gray-600 `} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Vendedor</button>
                                        </li> 
                                    </ul>
                                </div>
                                <div id="myTabContent"> 
                                    <div className={` p-4 rounded-lg  ${tipo_registro == 'vendedor' ? 'hidden':''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className='pt-4 w-full'>
                                            <div className="grid grid-cols-3 gap-3 p-4  w-full"  > 
                                                <div className="mb-6">
                                                    <input type="text" id="txtC_tipodocumento" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Tipo de documento*"  />
                                                </div>
                                                <div className="mb-6">
                                                    <input type="text" id="txtC_documento" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Documento*"  />
                                                </div> 
                                                <div className="col-start-1 mb-6 ">
                                                    <input type="text" id="txtC_nombres" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Nombres*"  />
                                                </div> 
                                                <div className="mb-6">
                                                    <input type="text" id="txtC_paterno" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Apellido Paterno*"  />
                                                </div> 
                                                <div className="mb-6">
                                                    <input type="text" id="txtC_materno" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Apellido Materno*"  />
                                                </div> 
                                                <div className="col-start-1 mb-6 ">
                                                    <input type="text" id="txtC_telefono" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Teléfono*"  />
                                                </div> 
                                                <div className="mb-6">
                                                    <input type="email" id="txtC_email" autocomplete="off" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Correo*"  />
                                                </div> 
                                                <div className="mb-6">
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

                                    <div className={` p-4  rounded-lg  ${tipo_registro == 'vendedor' ? '':'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                        <div className='pt-4 w-full'>
                                            <div className="grid grid-cols-3 gap-3 p-4  w-full"  > 
                                                <div className="">
                                                    <label className="block mb-2 text-sm  text-stone-600 ">Empresa</label>
                                                </div>
                                                <div className="mb-6 col-start-1">
                                                    <input type="text" id="txtV_ruc" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Ruc*"  />
                                                </div>
                                                <div className="mb-6">
                                                    <input type="text" id="txtV_razonsocial" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Razón Social*"  />
                                                </div> 
                                                <div className="col-start-1 col-end-7 ">
                                                    <input type="text" id="txtV_direccion" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Dirección*"  />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className='pt-4 w-full'>
                                            <div className="grid grid-cols-3 gap-3 p-4 w-full"  >
                                                <div className="">
                                                    <label className="block mb-2 text-sm  text-stone-600 ">Administrador de cuenta</label>
                                                </div>
                                                <div className="mb-6 col-start-1">
                                                    <input type="text" id="txtV_tipodocumento" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Tipo de documento*"  />
                                                </div>
                                                <div className="mb-6">
                                                    <input type="text" id="txtV_documento" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Documento*"  />
                                                </div>  
                                                <div className="col-start-1  ">
                                                    <input type="text" id="txtV_nombres" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Nombres*"  />
                                                </div> 
                                                <div className="mb-6  ">
                                                    <input type="text" id="txtV_paterno" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Apellido Paterno*"  />
                                                </div> 
                                                <div className="mb-6  ">
                                                    <input type="text" id="txtV_materno" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Apellido Materno*"  />
                                                </div> 
                                                <div className="col-start-1  ">
                                                    <input type="text" id="txtV_telefono" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Teléfono*"  />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className='pt-4 w-full'>
                                            <div className="grid grid-cols-3 gap-3 p-4  w-full"  > 
                                                <div className="">
                                                    <label className="block mb-2 text-sm  text-stone-600 ">Usuario</label>
                                                </div>

                                                <div className="mb-6 col-start-1">
                                                    <input type="email" id="txtV_email" autoComplete='off' className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Correo*"  />
                                                </div>
                                                <div className="mb-6">
                                                    <label className="relative block">
                                                        <span className="absolute inset-y-0 right-3 flex items-center pl-2" onClick={()=>setTipoPassVendedor(tipoPassVendedor=='password' ? 'text':'password') }>
                                                            {tipoPassVendedor=='password' ? eye:eyes_off}
                                                        </span>
                                                        <input type={tipoPassVendedor} placeholder="Contraseña*" name="password" id="password" className="bg-neutral-200 border border-neutral-200 text-gray-900 text-sm rounded-lg text-sm   block w-full  shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                                                    </label>
                                                </div>  
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className='text-center text-sm'>
                                    <span>Al registrarte aceptas nuestros <span className='text-sky-500'>Términos y condiciones</span></span>

                                    <div className="py-5 ">
                                        <button  type="button" className="rounded-xl bg-mk-blue hover:bg-sky-700 text-white text-sm py-3 px-4  w-64  focus:outline-none focus:shadow-outline">
                                            Registrarse
                                        </button>
                                        <br/> <div className='text-base py-1'>ó <span className='text-sky-500'>Iniciar Sesión</span></div>

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
