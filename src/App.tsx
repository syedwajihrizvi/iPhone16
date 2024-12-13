import AudioInfo from "./components/AudioInfo"
import Banner from "./components/Banner"
import CamereDetails from "./components/CameraDetails"
import Comparision from "./components/Comparision"
import Features from "./components/Features"
import FirstFooter from "./components/FirstFooter"
import { Header } from "./components/Header"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Payment from "./components/Payment"
import PhotoDetails from "./components/PhotoDetails"
import Privacy from "./components/Privacy"
import SecondFooter from "./components/SecondFooter"
import StickyNavbar from "./components/StickyNavbar"

const dealHeader = `Get $200–$905 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.`
function App() {

  return (
    <>
      <Navbar/>
      <StickyNavbar/>
      <Header text={dealHeader}/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Banner/>
      <Features/>
      <AudioInfo/>
      <PhotoDetails/>
      <CamereDetails/>
      <Privacy/>
      <Payment/>
      <Comparision/>
      <FirstFooter/>
      <SecondFooter/>
    </>
  )
}

export default App
