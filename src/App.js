import './App.css';
import {useEffect} from "react";
import Images from "./Images";

const webApp = window.Telegram.WebApp
const App = () => {
    const responseFromServer = () => {
        const response = fetch("http://localhost:9100/images", {
            method: "GET"
        })

        console.log("response from server:" + response)

        const body = response.json()
        if (response.status !== 200) {
            throw Error(body.message)
        }
        console.log(body.images)
        return body.images
    }


    useEffect(() => webApp.ready(), [])
    const onClose = () => webApp.close()
    return (
        <div className="App">
            work
            <button onClick={onClose}>Закрыть приложение</button>
            <Images data={responseFromServer()}/>
        </div>
    );
}

export default App;
