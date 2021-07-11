import * as Yup from 'yup';

const getSchema = (model = {}) => {
  const {
    id  = '',
    email = '',
    first_name: firstName = '',
    last_name: lastName = '',
    avatar = '',
    profilePicture =  null,
    experiences = [
      {
        title: 'Sr Software Engineer',
        companyId: 4,
      },
    ]
  } = model

  return {
    id,
    email,
    firstName,
    lastName,
    avatar,
    experiences,
    profilePicture
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
  experiences: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().min(4, 'Too short').required('Required'),
        companyId: Yup.number().positive().integer().required('Required'),
        certificate: Yup.mixed().required('Required')
      })
    ),
  profilePicture: Yup.mixed().required('Required')
});

export {
  getSchema,
  validator
}
