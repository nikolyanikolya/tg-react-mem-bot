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
        <Images data={["https://www.google.com/search?q=%D0%BA%D0%BE%D1%82+%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0&client=ubuntu&hs=zDD&channel=fs&sxsrf=AJOqlzXmbbdf9TRk0c4zmpVzdtp_YJYr3w:1678022888359&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjG472x8sT9AhWvtIsKHf2nAgwQ_AUoAXoECAEQAw&biw=1848&bih=968&dpr=1#imgrc=XlGkFXEyc7T5wM"]}/>
    </div>
  );
}

export default App;
