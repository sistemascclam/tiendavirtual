import Head from 'next/head'
import Layout, { siteTitle } from "@global/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      Marketplace Home
    </Layout>
  )
}