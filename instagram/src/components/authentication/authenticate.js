import React from 'react';

 const authenticate = LoginPage => UserIsLoggedInPage => loggedIn =>{
     console.log(loggedIn);
     if(loggedIn){
         return <UserIsLoggedInPage />
     }
     return <LoginPage />
 }



export default authenticate;