import './index.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import GettingStarted from './Components/GettingStarted'
import GetFavourite from './Components/GetFavourite'
import Extra from './Components/Extra'
import PaymentDesc from './Components/PaymentDesc'
import Form from './Components/Form'
import TnC from './Components/TnC'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='font-sodo'>
      <Header />
      <Nav />
      <Banner />
      <GettingStarted />
      <GetFavourite />
      <Extra />
      <PaymentDesc />
      <Form />
      <TnC />
      <Footer />
    </div>
  )
}

export default App
