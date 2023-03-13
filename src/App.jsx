import './App.css'


export default function App() {
  // useEffect(() => {
  //   tg.ready();
  // }, [])
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.Close();
  }

  return (
    <div className='App'>
      Ready
      <button onClick={onClose}>Close</button>
    </div>
  )
}
