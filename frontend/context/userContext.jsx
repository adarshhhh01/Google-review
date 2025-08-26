import React, { useState } from 'react'
const UserDataContext = React.createContext();

const UserContext = ({children}) => {
   const [User, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
   })

  return (
    <UserDataContext.Provider value={[User, setUser]}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext };
export default UserContext;