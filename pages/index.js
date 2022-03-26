import Head from 'next/head'
import Layout, { siteTitle } from "@global/layout";
import Image from 'next/image';
//import Layout, { siteTitle } from "../components/global/layout";

export default function Home() {
  return (
    <Layout home >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='pt-20 lg:pt-14 w-full min-h-screen '>
        <div className='hidden lg:block shadow-lg rounded-none lg:rounded-3xl max-w-7xl mx-auto'>
          <Image
            className='rounded-none lg:rounded-3xl'
            src="/images/banner.png"
            width={1624}
            height={650}
            layout="responsive"
            objectFit='cover'
          />
        </div>
        <div className='block lg:hidden shadow-sm rounded-none lg:rounded-3xl'>
          <Image
            className='rounded-none lg:rounded-3xl'
            src="/images/banner.png"
            width={1624}
            height={650}
            layout="responsive"
            objectFit='cover'
          />
        </div>
        <div className='shadow-card border-1 p-6 rounded-3xl max-w-4xl mx-6 lg:mx-auto my-6 lg:my-16 flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6'>
          <div className='w-8/12 text-center'>
            <p className='mb-6'>Paga aquí con</p>
            <div className='w-full lg:w-8/12 mx-auto'>
              <Image
                src="/images/tarjetas.png"
                width={383}
                height={55}
                layout="responsive"
              />
            </div>
          </div>
          <p className='mt-3'>ó</p>
          <div className='w-10/12 text-center'>
            <div className='w-64 mx-auto text-lg'>
              Contáctate directamente con un vendedor
            </div>
          </div>
        </div>
        <section className='mt-20'>
        <p className='text-mk-blue text-center text-3xl'>Descubre</p>
        </section>
        {/* <form action="" className="form bg-gray-50  y-22 h-100 w-200  py-5 w-96 px-8 items-center rounded-lg absolute top-12 right-20 ">
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
        </form> */}
      </div>
    </Layout>
  )
}