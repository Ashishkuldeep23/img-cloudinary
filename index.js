const express = require("express")

const expressFileUpload = require("express-fileupload")

const {uploadController} = require("./uploadController")



const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// // // Below mw is used as multer ----->
app.use(expressFileUpload({
    useTempFiles : true
}))


app.use(express.static(process.cwd() + "/public"))
 





app.get("/" , (req , res)=>{
    // res.status(200).send("Hello World")

    res.sendFile("/index.html")
})


app.post("/upload" , uploadController)



const port = 3000 || process.env.PORT

app.listen( port , ()=>{
    console.log("Express app is running at" , port)
} )

