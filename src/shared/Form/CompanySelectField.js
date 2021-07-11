import React, {useEffect, } from 'react';
import { useField } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
  callApi,
  selectApi
} from '../../reducers/apiSlice'

import {
  CSelect,
  CFormGroup,
  CLabel,
  CInvalidFeedback
} from '@coreui/react'


const CompanySelectField = ({ label, ...props }) => {

  const companyRef = React.useRef(null)
  const [field, meta] = useField(props);
  const { companies = null } = useSelector(selectApi)
  const dispatch = useDispatch()

  useEffect(()=>{
    if( companyRef.current === null ) {
      dispatch(callApi({
        operationId: 'users',
        output: 'companies'
      }))
    }
  }, [dispatch])

  if(companyRef.current === null && companies !== null) {
    companyRef.current = companies.data
  }

  return (
    <CFormGroup>
      <CLabel htmlFor="nf-email">{label}</CLabel>
      <CSelect
        invalid={meta.touched && meta.error ? true: false}
        aria-label="Default select example"
        {...field} {...props} >
        <option value="0">Select Company</option>
        { Array.isArray(companyRef.current) &&
          companyRef.current.map( ({id, first_name}) =>
          <option key={id} value={id}>{first_name}</option>
          )
        }
      </CSelect>

        {meta.touched && meta.error ? (
          <CInvalidFeedback>{meta.error}</CInvalidFeedback>
      ) : null}
    </CFormGroup>
  )
}

export default CompanySelectField
