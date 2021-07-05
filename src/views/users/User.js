import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {
  callApi,
  selectApi
} from '../../reducers/apiSlice'

import Card from '../../shared/List/Card'
import Details from '../../shared/Details'

const cardProps = {
  name: 'User Details'
}

/*const toUserDto = (user) => {
  const {
    id: Id,
    email: Email,
    first_name: FirstName,
    last_name: LastName,
    avatar: Avatar
  } = user

  return {
    Id,
    Email,
    FirstName,
    LastName,
    Avatar
  }
}*/

const User = ({match}) => {
  const { loading, details = {
    data: {}
  }} = useSelector(selectApi)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(callApi({
      operationId : `users/${match.params.id}`,
			output: 'details'
    }))
  }, [dispatch, match.params.id])

  let data = Object.entries(details.data || [])

  const body = <Details {...{
    loading,
    data
  }} />

  return (
    <Card {...{
      ...cardProps,
      body
    }}/>
  )
}

export default User
