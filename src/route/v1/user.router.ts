import router, { Request, Response } from "express"

const userRouter = router()

userRouter.post("/register", (req: Request, res: Response) => {
    const {username, password} = req.body

    if(!username || !password || password < 6){
        res.status(401).json({
            message: "incorrect username and password"
        })
        return
    }

    // TODO : make sure user not exist
    // TODO : store username and hash password in db!

    res.status(201).json({
        message: "register successfully",
        username
    })

})


export default userRouter