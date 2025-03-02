import jwt from "jsonwebtoken"
import {AUTH} from "../routers/constants";

export const AuthController = async () => {
    // @ts-ignore
    const token = jwt.sign({name: "logamithran"}, AUTH.PRIVATE_KEY, {
        expiresIn: '1d'
    })

    console.log(token)
}