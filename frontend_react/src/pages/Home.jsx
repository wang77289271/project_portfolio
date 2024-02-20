import {
  About,
  Footer,
  Header,
  Skills,
  Work,
  MyWork,
  Design,
} from '../container'
import { Navbar } from '../components'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <MyWork />
      <Design />
      <Skills />
      <Footer />
    </>
  )
}

export default Home
