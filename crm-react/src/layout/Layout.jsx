import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4'>
            1
        </div>

        <div className='md:w-1/4'>
            <Outlet/>
        </div>

    
    </div>

   
  )
}

export default Layout