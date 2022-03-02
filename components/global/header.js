
import React from 'react';

export function  mostrarform(){
  document.getElementById('form').style.display = 'block';

}
export default function Header() {
    return (
        
       <header>
     <div className="mx-auto">
     <nav className="bg-mk-blue flex justify-center lg:justify-start items-center py-5 ">
     
         <button className="buttonlogo left-20 bg-white h-14 w-14 rounded-full absolute top-1.4 left-3 py-5 " type='button'>
             <div className=" p-3 object-cover h-6 w-6 scale-100 text-white"> </div>
             <img src="../images/cclamlogotipo.png" className="img h-12 w-20 absolute top-1 px-2 py-1 left-0 " > 
             
             </img>
         </button>
         <div className="text-white font-bold px-5  relative left-14" >Marketplace</div>
         
          <button type="button" className="buton">
             <div className="links px-7 text-white relative left-8">

             <ul>
                 <li>
                     <a href="#">Categorias</a>
                 </li>            
            </ul>
             </div>
         </button>
         
  <form method="GET">
    <div className="relative text-gray-600 focus-within:text-gray-400 px-2">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 px-6 px-10 px-9 px-72 w-full rounded-full ring-2 ext-sm text-white bg-white text-right pl-15 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Buscar en Marketplace CCLAM" autocomplete="off"/>
    </div>
  </form>

   
         
    
         <button type="button" className="button ">
    <svg xmlns="http://www.w3.org/2000/svg" className="heart  h-7 w-7 text-white relative left-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
   </svg>
  </button> 

    <button type="button"className="button ">
     <svg xmlns="http://www.w3.org/2000/svg" className="car h-7 w-7 text-white relative left-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
     </svg>
   </button>

  
 
   <button type="button" className="button rounded-full h-14 w-14 absolute right-20 top-2.5 bg-white"  onclick="mostrarform();">
   <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 absolute right-1.3 top-0 py-1.5 px-2 text-mk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
   </button>
 
   <div>
    <form action="" id="form" className="form bg-gray-50  y-22 h-100 w-200  py-5 w-96 px-6 items-center rounded-lg absolute top-12 right-20">
	<div className="lt font-bold text-black px-4 py-3">Bienvenid@ al MarketPlace CCLAM</div>
    
    <div className="space-x-4 px-3">
    	<button className="btn1 bg-white py-3 px-3 rounded-lg text-mk-blue">
    		Iniciar Sesion 
    	</button>
        <a>o</a>
        <button className="btn2 bg-mk-blue py-3 px-5 rounded-lg text-white">
        	Registrarte
        </button>
    </div>
</form>
</div>

     </nav>

   
  
     <nav className="bg-stone-50 py-5 flex justify-center lg:justify-start items-center bg-auto border-gray-600">
    
             <div className="links text-black bg-blak px-10">

             <ul>
                 <li >
                     <a className ="a px-20 font-bold py-10" href="#">Calzado</a>
                     <a className ="a1 px-10 font-bold" href="#">Ropa de Dama </a>
                     <a className ="a2 px-10 font-bold" href="#">Ropa de Caballero</a>
                     <a className ="a3 px-10 font-bold" href="#">Ropa de Niño</a>
                     <a className ="a4 px-10 font-bold" href="#">Electronica</a>
                     <a className ="a5 px-10 font-bold" href="#">Calzado</a>
                     <a className ="a6 px-10 font-bold" href="#">Otros</a>
                 </li>            
            </ul>
             </div>
      
    </nav>

    </div>

    </header>
    
      
    )
  
}



	

