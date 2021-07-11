import React from 'react';
import { useField } from 'formik';
import {
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
} from '@coreui/react'


const FileField = ({ label, fieldValue,  ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="nf-email">{label}</CLabel>
        <CInput invalid={meta.touched && meta.error ? true: false} type="file" onChange={(e) =>{
          console.log(field.name, e.currentTarget.files[0])
          fieldValue(field.name , e.currentTarget.files[0])
        }} />
        {meta.touched && meta.error ? (
            <CInvalidFeedback>{meta.error}</CInvalidFeedback>
        ) : null}
      </CFormGroup>
    </>
  )
}

export default FileField
