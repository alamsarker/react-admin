import React from 'react';
import { useField } from 'formik';
import {
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback
} from '@coreui/react'

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="nf-email">{label}</CLabel>
        <CInput invalid={meta.touched && meta.error ? true: false}  type="input" {...field} {...props}/>
          {meta.touched && meta.error ? (
            <CInvalidFeedback>{meta.error}</CInvalidFeedback>
        ) : null}
      </CFormGroup>
    </>
  )
}

export default InputField
