import './App.css'
import {useTelegram} from "./hooks/useTelegram.js";


export default function App() {
  const {onToggleButton} = useTelegram();
  
  // useEffect(() => {
  //   tg.ready();
  // }, [])

  return (
    <div className='App'>
      Ready
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  )
}
