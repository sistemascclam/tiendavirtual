import Head from 'next/head'
import Layout, { siteTitle } from "@global/layout";
//import Layout, { siteTitle } from "../components/global/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
                <title>Inicio de Sesión | {siteTitle}</title>
            </Head>
            <div>
    <form action="" className="form bg-gray-50  y-22 h-100 w-200  py-5 w-96 px-8 items-center rounded-lg absolute top-12 right-20 ">
	<div className="lt font-bold text-black px-2 py-3">Bienvenid@ al MarketPlace CCLAM</div>
    
    <div className="space-x-4">
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
    </Layout>
  )
}