const express = require("express")

const app = express()

app.use(express.static("public"));
app.get("/images", (req, resp) => {
    resp.send({ images: ["https://api.memegen.link/images/panik-kalm-panik.png"] });
    // const content = renderToString(<Images data={["https://api.memegen.link/images/panik-kalm-panik.png"]}/>)
    // resp.status(200).render('index', { title: 'images', data: false, content })
})

app.listen(9100, () => {
    console.log("Server starting....")
})



