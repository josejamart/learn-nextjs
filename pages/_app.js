import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
      <div>esto es una cabecera</div>
      <Component {...pageProps} />
      <div>esto es un footer</div>
    </>
}

export default MyApp
