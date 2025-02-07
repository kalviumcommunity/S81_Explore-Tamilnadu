const mongoose=require("mongoose")
require("dotenv").config()
console.log(process.env.PORT)
const connection =mongoose.connect(process.env.mongo_url)
module.export=connection