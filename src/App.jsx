import './App.css'

const tg = window.Telegram.WebApp;

export default function App() {
  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.Close();
  }
  
  return (
    <main>
      <button onClick={onClose}>Close</button>
    </main>
  )
}
