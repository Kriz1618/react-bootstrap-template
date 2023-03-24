import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import { NavBar, AlertMessage, AcordionC } from './Components';
import { About, Contact, Error, Home, SignUp, Login, CarouselE } from './Pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alert" element={<AlertMessage />} />
          <Route path="/acordion" element={<AcordionC />} />
          <Route path="/carousel" element={<CarouselE />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
