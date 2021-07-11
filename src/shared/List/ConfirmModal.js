import React from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CButton,
} from '@coreui/react'

import {useSelector, useDispatch} from 'react-redux'
import {selectConfirm, modalAction} from '../../reducers/confirmSlice'
//import fetcher from 'src/lib/fetcher'
import { setMessage } from 'src/reducers/toastSlice'
import {
  callApi,
  selectApi
} from '../../reducers/apiSlice'


const ConfirmModal = () => {
  const { isOpen, route } = useSelector(selectConfirm)
  const dispatch = useDispatch()

  return (<CModal
    backdrop={true}
    show={isOpen}
  >
    <CModalHeader>
      <CModalTitle>Confirmation</CModalTitle>
    </CModalHeader>
    <CModalBody>Are you sure that you are going to perform this action?</CModalBody>
    <CModalFooter>
      <CButton color="primary" onClick={() => {
        if(route !== '') {
          /*dispatch(callApi({
            operationId: route,
            output: 'result',
            parameters: {
              method
            }
          }))*/

          // dispatch(callApi({
          //   operationId: 'users',
          //   output: 'list'
          // }))

          // No NEED if api call
          dispatch(setMessage({
            type: 'error',
            message: 'Something went wrong on server'
          }))

          dispatch(modalAction({
            isOpen: false
          }))
        }
      }}>Yes, Please</CButton>
      <CButton color="secondary" onClick={() => dispatch(modalAction({
        isOpen: false
      })) } >Close</CButton>
    </CModalFooter>
  </CModal>
  )
}

export default ConfirmModal
