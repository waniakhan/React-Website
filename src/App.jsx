
import React, { useContext, useState } from 'react'
import Admin from './Admin';
import Guest from './Guest';
import Users from './Users';
import { GlobalContext } from './context/context';
import { decodeToken } from 'react-jwt'

const componentsByRoles = {
  'admin': Admin,
  'user': Users,
  'guest': Guest
}

const getUserRole = (role) => componentsByRoles[role] || componentsByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined;
    } else {
      const res = decodeToken(token);
      return res?.role;
    }
  }

  const CurrentToken = decodeUser(state.token);
  const CurrentUserRole = getUserRole(CurrentToken);

  return (
    <div>
      {state.token ? (
        <CurrentUserRole />
      ) : (
        <Users />
      )}
    </div>
  );
}

