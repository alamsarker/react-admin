import React from 'react'
import {
  CLink
} from '@coreui/react'

import {useDispatch} from 'react-redux'
import {modalAction} from '../../reducers/confirmSlice'


const DeleteItem = ({route}) => {
  const dispatch = useDispatch()

  return (
    <>
    <CLink
      className="card-header-action nw-user-delete"
      onClick={() =>{
      dispatch(modalAction({
        route,
        isOpen: true,
        method: 'DELETE'
      }))
    }} >Delete</CLink>
    </>
  )
}

export default DeleteItem
