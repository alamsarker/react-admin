import React from 'react'

import {
  CRow,
  CCol,
  CButton
} from '@coreui/react'

const Actions = ({left, right}) => {
  return (
    <CRow className="my-1">
      <CCol xl={6}>
        {
          left.length > 0 && left.map( ({label, href, color}, index) =>
            <CButton key={index} size="sm" className="mx-1" href={href} color={color} variant="outline">
              {label}
            </CButton>
          )
        }
      </CCol>
      <CCol xl={6}>
        {
          right.length > 0 && right.map( ({id, label, href, color}, index) =>
            <CButton key={index} className="mx-1" id={id} href={href} color={color} >
              {label}
            </CButton>
          )
        }
      </CCol>
    </CRow>
  )
}

export default Actions
