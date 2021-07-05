import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
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

export default UserSchema
