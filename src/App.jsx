import "./global.css"
import Header from "./components/header/header"
import Card from "./components/Card"


function App() {


  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-start-center">
        <Card />
      </div>
    </div>
  )
}

export default App
