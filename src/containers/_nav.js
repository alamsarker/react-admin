import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Admin Panel']
  },
  {
    _tag: 'CSidebarNavItem',
    id: 'nw-user-list',
    name: 'Users',
    to: '/users',
    icon: 'cil-user',
  },
]

export default _nav
