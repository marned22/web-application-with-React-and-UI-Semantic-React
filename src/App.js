import Navbar from "./components/Navbar"
import Pocetna from "./pages/pocetna/Pocetna"
import Fudbal from "./pages/fudbal/Fudbal"
import Rakomet from "./pages/rakomet/Rakomet"
import Kosarka from "./pages/kosarka/Kosarka"
import Ckembari from "./pages/ckembari/Ckembari"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"


const App = () => {
  return(
    <div style={{ backgroundColor: 'green' }}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/pocetna" element={<Pocetna />} />
            <Route path="/fudbal" element={<Fudbal />} />
            <Route path="/rakomet" element={<Rakomet />} />
            <Route path="/kosarka" element={<Kosarka />} />
            <Route path="/ckembari" element={<Ckembari />} />
          </Routes>
        <Footer />
    </div>
  )
}

export default App
