import { Habit } from "./components/Habit";
import './styles/global.css'

function App() {
  return (
    <div>
      <Habit completed={3} />
    </div>
  )
}

export default App