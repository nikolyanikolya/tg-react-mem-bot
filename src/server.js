const express = require('express')
const app = express()
const preRenderedHtml = require('./preRenderedHtml')
const port = 9100
app.get("/images", (req, resp) => {
    const html = preRenderedHtml({ data: req })
    resp.send(html)
});

app.listen(port, () => {
    console.log('Server listening on port: ' + port)
});

