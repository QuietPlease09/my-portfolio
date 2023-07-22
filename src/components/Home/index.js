import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['r', 'i', 'c', 'k', 's']
const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={letterClass}>i</span>
          <br></br>
          <span className={letterClass}>I</span>
          <span className={letterClass}>'</span>
          <span className={letterClass}>m</span>
          <img src={LogoTitle} alt="Developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br></br>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Aspiring Frontend Developer / React /  Fresh Graduate</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo></Logo>
    </div>
    <Loader type='pacman'></Loader>
    </>
  )
}
export default Home
