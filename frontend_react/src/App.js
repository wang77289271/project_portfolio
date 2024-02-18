import {
  About,
  Footer,
  Header,
  Skills,
  Work,
  MyWork,
  Design,
} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <MyWork />
      <Design />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
