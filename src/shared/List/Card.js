import React from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'

const Card = ({
  name,
  title,
  body
}) =>
  <CRow>
    <CCol xl={12}>
      <CCard>
        <CCardHeader>
          {name}
          <small className="text-muted"> {title}</small>
        </CCardHeader>
        <CCardBody>
            {body}
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>

export default Card
