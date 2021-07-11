import React from 'react';
//import { FieldArray, Field } from 'formik';
import {
  CButton
} from '@coreui/react'
import InputField from './InputField'
import CompanySelectField from './CompanySelectField'
import FileField from './FileField'

const ExperincesField = ({ remove, push, form }) => {

  return (
    <div className="py-2">
      {form.values.experiences.length > 0 &&
        form.values.experiences.map((friend, index) => (
          <div className="row" key={index} style={{ border: '1px solid blue ', padding: '5px', margin: '10px' }}>
            <div className="col">
              <InputField
                label="Title"
                name={`experiences.${index}.title`}
                type="text"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="col">
              <CompanySelectField
                label="Company"
                name={`experiences.${index}.companyId`}
                placeholder="Enter Company Name"
              />

            </div>
            <div className="col">
              <FileField
                label="Certificate"
                name={`experiences.${index}.certificate`}
                fieldValue = {form.setFieldValue}
              />
            </div>
            <div className="col">
              <CButton
                type="button"
                color="danger"
                size="sm"
                onClick={() => remove(index)}
              >
                X
              </CButton>
            </div>
          </div>
        ))}

      <CButton
        color="link"
        onClick={() => push({
          title: '',
          companyId: '',
          certificate: null
        })}>
          + Add Experience
      </CButton>
    </div>
  )
}

export default ExperincesField
