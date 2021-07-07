import * as Yup from 'yup';

const getSchema = (model = {}) => {
  const {
    id: id = '',
    email: email = '',
    first_name: firstName = '',
    last_name: lastName = '',
    avatar: avatar = ''
  } = model

  return {
    id,
    email,
    firstName,
    lastName,
    avatar
  }
}

const validator = Yup.object().shape({
  firstName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export {
  getSchema,
  validator
}
