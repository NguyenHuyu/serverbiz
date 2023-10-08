import { Request, Response } from 'express'
import User from '~/models/User.schema'
import database from '~/services/database.services'

export const loginControllers = (req: Request, res: Response) => {
    res.send('loginControllers')
}

// export const registerControllers = async (req: Request, res: Response) => {
//     const { email, password } = req.body
//     const result = await database.connect.insertOne(
//         new User({
//             email,
//             password
//         })
//     )
//     return res.json(result)
// }
