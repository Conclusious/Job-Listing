import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Login" element={<Loginpage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
