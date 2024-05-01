import background from './assets/mainPhoto-unsplash.jpg'
import About from './about.jsx'
import Events from './events.jsx'
import Contact from './contact.jsx'
import Register from './register.jsx'

import './App.css'

function App() {

  return (
    <>
      <div className="items-center flex-col space-y-80" id="mainPage" style={{
         backgroundImage: `url(${background})`
      }}>
      
      <h1 className="lg:text-9xl md:text-8xl sm:text-6xl text-md font-semibold text-CreamWhite">UIC Climbers</h1>
      
      <Events/>
      </div>
      
      <About/>
      <Register/>
      <Contact/>

    </>
  )
}

export default App
