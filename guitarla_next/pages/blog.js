import {useEffect} from 'react'
import Layout from '../components/Layout'

const Blog = () => {

  useEffect( () => {
    const consultarAPI = async () => {
      const url = ''
    }
    consultarAPI();
  }, [])



  return (
    <Layout 
        pagina = 'Blog'>
    <div>Blog</div>
    </Layout>
  )
}

export default Blog