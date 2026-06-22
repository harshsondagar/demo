import router, { Request, Response } from "express"

const userRouter = router()

userRouter.get("/", (req: Request, res: Response) => {
    
    res.status(200).json({
        message: "Hello! welcome to server",
        
    })

})

userRouter.post("/", (req: Request, res: Response) => {
    
    res.status(200).json({
        message: "Hello! ",
        
    })

})


export default userRouter