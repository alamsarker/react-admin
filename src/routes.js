import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const UserForm = React.lazy(() => import('./views/users/UserForm'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/add', exact: true,  name: 'Add User', component: Users },
  { path: '/users/edit/:id', exact: true,  name: 'Edit User', component: UserForm },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
