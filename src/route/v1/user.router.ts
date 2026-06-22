import router, { Request, Response } from "express"

const userRouter = router()

userRouter.get("/:id", (req: Request, res: Response) => {

    res.status(200).json({
        message: "Hello! welcome to server",
  
    })
})

userRouter.post("/", (req: Request, res: Response) => {
    
    res.status(200).json({

        
        message: "Hello! welcome ",
    })   

})


export default userRouter   