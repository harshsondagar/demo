import router, { Request, Response } from "express"

const userRouter = router()

userRouter.get("/", (req: Request, res: Response) => {

    res.status(200).json({
        message: "Hello! user",
    })
})

userRouter.post("/", (req: Request, res: Response) => {
    
    const userMessage = req.body.userMessage;

    res.status(200).json({
        message: `your message : ${userMessage} `,
    })   

})


export default userRouter   