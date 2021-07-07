import React, { useEffect } from 'react'
import { Formik, Form } from 'formik';
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
import { InputField } from '../../shared/Form'
import Card from '../../shared/List/Card'


const FormWithOutCard = ({match}) => {

  const { loading, output = {
    data: {}
  }} = useSelector(selectApi)

  const dispatch = useDispatch()

  //console.log(output.data, 'user')

  useEffect(() => {
    let {
      params: {
        id = 0
      }
    } = match;

    console.log(id,  'Id')
    if( id > 0 ) {
      dispatch(callApi({
        operationId : `users/${id}`
      }))
    }
  }, [])

  console.log(getSchema(output.data), 'schema')

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

        <CButton id="nw-submit-button" type="submit" color="primary">Save</CButton>
        <CButton id="nw-cancel-button" href="/users" type="button" color="light">Cancel</CButton>
      </Form>
    </Formik>
  )
}

const UserForm = (props) => <Card {...{
  name: 'User Form',
  body: <FormWithOutCard {...props}  />
}} />

export default UserForm
