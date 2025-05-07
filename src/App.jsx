import "./global.css"
import Header from "./components/header/header"
import Card from "./components/Card"
import Button from "./components/Button"
import { Plus } from "lucide-react";


function App() {


  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-start-center">
        <Card />
        <Button className="mt-[30px]" startIcon={<Plus size={20} color="lime" />} />
      </div>
      
    </div>
    
  )
}

export default App;
