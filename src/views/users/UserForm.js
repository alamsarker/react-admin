import React, { useEffect } from 'react'
import { Formik, Form, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
  CButton
} from '@coreui/react'
import {
  getSchema,
  validator
} from './UserSchema'
import {
  callApi,
  selectApi
} from '../../reducers/apiSlice'
import {
  setMessage
} from '../../reducers/toastSlice'
import {
  InputField,
  ExperincesField,
  FileField
} from '../../shared/Form'
import Card from '../../shared/List/Card'


const FormWithOutCard = ({match}) => {

  const { output = {
    data: {}
  }} = useSelector(selectApi)

  const dispatch = useDispatch()

  useEffect(() => {
    let {
      params: {
        id = 0
      }
    } = match;

    if( id > 0 ) {
      dispatch(callApi({
        operationId : `users/${id}`
      }))
    }
  }, [dispatch, match])

  return (
    <Formik
      enableReinitialize = {true}
      initialValues={getSchema(output.data)}
      validationSchema={validator}
      onSubmit={(values) => {
        console.log(values, 'values')
        /*
        dispatch(callApi({
          operationId: 'users',
          parameters: {
            method:  id > 0 'PUT' : 'POST',
            body: JSON.stringify(values)
          }
        }))*/

        // No NEED if api call
        dispatch(setMessage({
          type: 'success',
          message: 'User has been created successfully'
        }))
      }}
    >
      { ({setFieldValue}) => (
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

          <FieldArray name="experiences" component={ExperincesField} />

          <FileField
            name="profilePicture"
            label="Profile Picture"
            fieldValue = {setFieldValue}
          />

          <CButton id="nw-submit-button" type="submit" color="primary">Save</CButton>
          {' '}
          <CButton id="nw-cancel-button" href="/users" type="button" color="light">Cancel</CButton>
        </Form>
      )}
    </Formik>
  )
}

const UserForm = (props) => <Card {...{
  name: 'User Form',
  body: <FormWithOutCard {...props}  />
}} />

export default UserForm
