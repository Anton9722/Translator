import { useState } from 'react'
import './App.css'
import Form from './Form'
import Translator from './Translator'

function App() {

  const [translation, setTranslation] = useState();

  const getTranslation = (getTrans) => {
    setTranslation(getTrans);
  }

  return (
    <div>
      <h1>Translator</h1>
      <h2>Translate From English</h2>
      <Form getTranslation={getTranslation} />
      <Translator displayTranslation ={translation}/>
    </div>
  )
}

export default App
