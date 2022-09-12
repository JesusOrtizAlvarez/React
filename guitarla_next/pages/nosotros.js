import Image from 'next/image'
import Layout from '../components/Layout'
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
    pagina='Nosotros'>
        <main className='contenedor'>
          <h2 className='heading'> Nosotros </h2>
          <div className={styles.contenido}>
              <Image layout='responsive' width={600} height={450} src = "/img/nosotros.jpg" alt='Imagen sobre nosotros' />
              
             <div> 
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Vulputate ut pharetra sit amet aliquam. Pretium lectus quam id leo in vitae. Elit duis tristique sollicitudin nibh sit amet commodo. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
                </p>
                <p>
                Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Netus et malesuada fames ac turpis. Id ornare arcu odio ut. Feugiat pretium nibh ipsum consequat nisl. Malesuada fames ac turpis egestas maecenas pharetra. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Blandit volutpat maecenas volutpat blandit aliquam etiam. In nibh mauris cursus mattis. 
                </p>
             </div> 
          </div>
         </main>
    </Layout>
  )
}

export default Nosotros
