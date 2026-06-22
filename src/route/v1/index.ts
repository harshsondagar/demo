import  router, { Request, Response } from "express"
import authRouter from "./authRouter"

const v1Router = router()

v1Router.use("/auth",authRouter)


export default v1Router