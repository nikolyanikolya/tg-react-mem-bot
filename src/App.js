import './App.css';
import {useEffect} from "react";
const webApp = window.Telegram.WebApp
function App() {

  useEffect(() => webApp.ready(), [])
  const onClose = () => webApp.close()
  return (
    <div onClick={onClose} className="App">
      work
    </div>
  );
}

export default App;
