import './App.css';
import {useEffect} from "react";
import AppRouter from "./AppRouter"
const webApp = window.Telegram.WebApp
function App() {

  useEffect(() => webApp.ready(), [])
  const onClose = () => webApp.close()
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть приложение</button>
      <AppRouter />
    </div>
  );
}

export default App;
