import './App.css';
import {useEffect} from "react";
const webApp = window.Telegram.WebApp
function App() {

  useEffect(() => webApp.ready(), [])
  const onClose = () => webApp.close()
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть приложение</button>
    </div>
  );
}

export default App;
