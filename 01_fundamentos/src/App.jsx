import './App.css'
import { Button } from './components/Button'

function App() {
  const name_um = ["botão um"]
  const name_dois = ["botão dois"]
  const name_tres = ["botão três"]
  return (
    <>
      <Button name={name_um}/>
      <Button name={name_dois}/>
      <Button name={name_tres}/>
    </>
  )
}

export default App
