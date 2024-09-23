import { celebrate, Joi, Segments } from 'celebrate'

const userScheme = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120).required()
})

const validateUserPost = celebrate({
  [Segments.BODY]: userScheme
})

const validateUserPut = celebrate({
  [Segments.BODY]: userScheme
})

const validateParamsUserId = celebrate({
  [Segments.PARAMS]: {
    userId: Joi.number().integer().positive().required()
  }
})

export { validateUserPost, validateUserPut, validateParamsUserId }
