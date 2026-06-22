import  router, { Request, Response } from "express"
import authRouter from "../v1/authRouter"

const v2Router = router()

v2Router.use("/auth",authRouter)


export default v2Router