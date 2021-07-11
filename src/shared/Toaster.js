import React from 'react'
import {
  CToaster,
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'
import {useSelector} from 'react-redux'
import { selectToast } from 'src/reducers/toastSlice'

const Toaster = () => {
  const { counter, type, message } = useSelector(selectToast)

  const a = Array.from(Array(counter), (v, i) => i+ 1)

  return (
    <CToaster>
      { a.map( (v, i) =>  <CToast key={i} color={type === 'success' ? 'success': 'danger'} show={true} placement="top-end">
        <CToastHeader>
          {type === 'success' ? `Success` : 'Error'}
        </CToastHeader>
        <CToastBody>{message}</CToastBody>
      </CToast>
      )}
    </CToaster>
  )
}

export default Toaster
