import React from 'react'
import { Formik, Form } from 'formik';
import { InputField } from '../../shared/Form'
import UserSchema from './UserSchema'

// import { useSelector, useDispatch } from 'react-redux';
// import {
//   callApi,
//   selectApi
// } from '../../reducers/apiSlice'

const UserForm = () => {

  // GET users/1
  //userData = toUserDto(response.data)

  // const {loading, output} = useSelector(selectApi)
  // if(loading)

  // const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={UserSchema}
      onSubmit={(values) => {
        console.log(values, 'values')
        /*
        dispatch(callApi({
          operationId: 'users',
          parameters: {
            method: 'POST',
            body: JSON.stringify(values)
          }
        }))*/
      }}
    >
      <Form>
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Enter First Name"
        />

        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Enter Last Name"
        />

        <InputField
          label="Email Addresss"
          name="email"
          type="text"
          placeholder="Enter Email Addresss"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )

}

export default UserForm
