import { Router } from 'express'
import { loginControllers } from '~/controllers/users.controllers'
import { loginValidation } from '~/middlewares/users.middlewares'

const usersRouter = Router()

usersRouter.post('/login', loginValidation, loginControllers)
usersRouter.post('/register')

export default usersRouter
