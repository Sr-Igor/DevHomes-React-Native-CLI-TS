import Joi from 'joi';
import { UserSignIn } from 'pages/Stacks/Login';
import { UserRegister } from 'pages/Stacks/Register';

const fieldsValidations = {
  name: Joi.string().required().messages({
    'string.empty': 'O campo nome é obrigatório'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'O campo email é obrigatório',
      'string.email': 'O campo email deve ser um email válido'
    }),
  cpf: Joi.string().min(11).required().messages({
    'string.empty': 'O campo cpf é obrigatório',
    'string.min': 'O campo cpf deve ter no mínimo 11 caracteres'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'O campo senha é obrigatório'
  }),
  password_confirm: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'As senhas devem ser iguais',
    'string.empty': 'O campo confirmação de senha é obrigatório'
  })
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
}

export function signUpValidate(values: UserRegister) {
  const schema = Joi.object(fieldsValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function signInValidate(values: UserSignIn) {
  const { cpf, password } = fieldsValidations;
  const schema = Joi.object({ cpf, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
