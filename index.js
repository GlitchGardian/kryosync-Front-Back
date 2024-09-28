const express = require("express")
const app = express()
const path = require("path")
const kryosyncRoutes = require("./routes/kryosyncRoutes")
const staticRoutes = require("./routes/staticRoutes")
const { connectDB } = require("./middleware/dbConnect")

connectDB("mongodb://localhost:27017/kryosync")
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")


app.use("/", staticRoutes )
app.use("/gui", kryosyncRoutes)

app.listen(3000, (err) => {
    if (err)
        console.log(err);
})

