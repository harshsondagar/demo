import router, { Request, Response } from "express"

const authRouter = router()

authRouter.post("/register",(req:Request,res:Response)=>{
    const {username,password} = req.body

    if(!username || !password || password < 6){
        res.status(401).json({
            message : "incorrect username and password"
        })
        return
    }

    // TODO : make sure user not exsist

    // TODO : store username and hash password  in db!

    res.status(201).json({
        message : "register successfully",
        username
    })

})

<<<<<<< HEAD
authRouter.post("/register",()=>{
    // TODO : signin
=======

authRouter.post("/register",(req:Request,res:Response)=>{
    const {username,password} = req.body

    if(!username || !password || password < 6){
        res.status(401).json({
            message : "incorrect username and password"
        })
        return
    }

    // TODO : make sure user exist

    // TODO : store token in cookie 

    res.status(201).json({
        message : "login successfully",
        username
    })
})

authRouter.post("/logout",(req:Request,res:Response)=>{
    res.status(201).json({
        message : "logout successfully",

    })
>>>>>>> feature/auth
})

export default authRouter