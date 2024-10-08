import 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'

const outlet = () => {
  return (
    <>
      <NavBar />
      <div>outlet</div>
      <Footer />
    </>
  )
}

export default outlet
