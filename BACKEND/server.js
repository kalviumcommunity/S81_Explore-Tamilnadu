const {app}=require("./app")
require("dotenv").config()
const port= process.env.PORT
const connection=require("./db/connection")

app.get("/",async(req,res)=>{
     
    res.send("hello.....")
})

app.listen(port,async()=>{

    try {
        await connection;
        console.log(`app is running on http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
   
})