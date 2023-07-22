import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyCV from './components/MyCV'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="mycv" element={<MyCV></MyCV>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
