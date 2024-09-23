import { Router } from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'
import { validateParamsUserId, validateUserPost, validateUserPut } from '../validators/userValidator.mjs'

const usersRouter = Router()

usersRouter.route('/').get(getUsersHandler).post(validateUserPost, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(validateParamsUserId, getUserByIdHandler)
  .put(validateParamsUserId, validateUserPut, putUserByIdHandler)
  .delete(validateParamsUserId, deleteUserByIdHandler)

export default usersRouter
