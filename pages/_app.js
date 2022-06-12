import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Kickstart your Freelancing Career" />
        <meta name="keywords" content="kickstart, freelance, money, clients" />
        <meta name='og:title' content='Solodustries' />
        <meta name='og:type' content='product' />
        <meta name='og:url' content='http://solodustries.vercel.app' />
        <meta name='og:image' content='blob:https://vercel.com/a363da49-9590-49de-b35a-50195dae4b27' />
        <meta name='og:site_name' content='Solodustries' />
        <meta name='og:description' content='Kickstart your freelancing career with us!'></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
