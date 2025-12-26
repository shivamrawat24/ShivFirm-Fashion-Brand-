// import { useState } from 'react'

import './App.css'
import Connector from './Connector'
import Pant from './spair/Footer/Pant'
import System from './spair/Header/System'

function App() {

  return (
    <>
    <header>
      <System/>
    </header>
    <main>
          <Connector/>
    </main>
    <footer>
      <Pant/>
    </footer>
      
    </>
  )
}

export default App
