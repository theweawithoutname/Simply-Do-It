import "./global.css"
import Header from "./components/header/header"
import Card from "./components/Card"
import Button from "./components/Button"


function App() {


  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-start-center">
        <Card />
      </div>
      <Button />
    </div>
    
  )
}

export default App
