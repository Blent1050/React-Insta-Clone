import React from 'react';

 const authenticate = LoginPage => UserIsLoggedInPage => props => {
     if(props.loggedIn){
         return <UserIsLoggedInPage />
     }
     return <LoginPage />
 }



export default authenticate;