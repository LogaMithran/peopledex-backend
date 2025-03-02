import express, {NextFunction} from "express";
import passport from "passport";
import {Request, Response} from "express"

const AuthRouter = express.Router();

AuthRouter.get("/google", passport.authenticate('google', {
    scope: ['email', 'profile']
}))

AuthRouter.get("/google/callback", passport.authenticate('google', {
    successRedirect: "/users/dashboard",
    failureRedirect: "/google/failure"
}))

AuthRouter.get("/google/failure", (req, res) => {
    res.status(500).send("Login failed")
})


AuthRouter.get("/logout", (req: Request, res: Response, next: NextFunction) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }
        res.redirect("/")
    })
})

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    req.user ? next() : res.redirect("/")
}

export default AuthRouter