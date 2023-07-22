import Header from './components/Header'
import YouTubeAPI from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<home />} />
        </Routes>
        <Header />
        <YouTubeAPI />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
