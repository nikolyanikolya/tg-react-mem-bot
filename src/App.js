import './App.css';
import {useEffect} from "react";
import Images from "./Images";
const webApp = window.Telegram.WebApp
function App() {

  useEffect(() => webApp.ready(), [])
  const onClose = () => webApp.close()
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть приложение</button>
      <Images data={["https://api.memegen.link/images/panik-kalm-panik.png"]}/>
    </div>
  );
}

export default App;
