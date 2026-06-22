import router, { Request, Response } from "express"

const userRouter = router()

userRouter.get("/", (req: Request, res: Response) => {
    
    res.status(200).json({
        message: "Hello! welcome ",
    
    })

})


export default userRouter