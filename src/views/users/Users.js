import React from 'react'
import { CLink } from '@coreui/react'

import List from '../../shared/List/List'

const props =  {
  name: 'Users',
  title: 'User Management',
  actions: {
    left: [
      {
        label: 'Delete',
        color: 'danger',
        href: '/users/add'
      }
    ],
    right: [
      {
        id: 'nw-create-new-user',
        label: 'New User',
        color: 'success',
        href: '/users/add'
      }
    ]
  },
  config: {
    operationId: 'users',
    fields: [
      { key: 'id', _classes: 'font-weight-bold' },
      { key: 'first_name', _classes: 'font-weight-bold' },
      'last_name',
      'email',
      //'avatar',
      'action'
    ],
    scopedSlots: {
      //'avatar': (item) => <td> <img src={item.avatar} alt={item.name} /></td>,
      'action': ({id}) => <td>
        <CLink className="card-header-action nw-user-details" href={`users/${id}`}>Details</CLink> |
        <CLink
          href={`/users/edit/${id}`}
          rel="noreferrer noopener"
          className="card-header-action nw-user-edit"
        >
          Edit
        </CLink>
      </td>
    }
  }
}

const Users = () => <List {...props} />

export default Users
