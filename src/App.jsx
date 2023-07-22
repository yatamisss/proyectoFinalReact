import Header from './components/Header'
import YouTubeAPI from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<home/>} />
        </Routes>
        <Header />
        <YouTubeAPI/>
      </BrowserRouter>
    </>
  )
}

export default App
