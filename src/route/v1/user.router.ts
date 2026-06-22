import router, { Request, Response } from "express"

const userRouter = router()

userRouter.get("/:id", (req: Request, res: Response) => {
    const id = req.query.id;
    res.status(200).json({
        message: "Hello! welcome to server",
        userId : id
    })



})

userRouter.post("/", (req: Request, res: Response) => {
    
    res.status(200).json({
        message: "Hello! ",
        
    })

})


export default userRouter