import  router, { Request, Response } from "express"
import authRouter from "./authRouter"

const v1Router = router()

v1Router.use("/auth",authRouter)
v1Router.use("user",authRouter)


export default v1Router