import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"

import Test from "./app/components/test/test"

var  app = express()
var port = 3000

app.get("/", (req, res) => {
    var view = ReactDOMServer.renderToString(<Test />)
    res.send(view)
})

app.listen(port, () => console.log("hi"))