import "dotenv/config"
import express  from "express"
import cors from  "cors"
import v1Router from "./route/v1"
import v2Router from "./route/v2"

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use("/api/v1",v1Router)
app.use("/api/v2",v2Router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);  
})