import React, { createContext, useEffect, useState } from 'react';

export  const logInContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const GithubProvider = new GithubAuthProvider();



const AuthContext = ({children}) => {
const [number ,setNumber]=useState(0)

const [user,setUser]=useState(null)


// very important for set user
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
    
        setUser(loggedUser)
    })
    return () => {
        unsubscribe()
    }
}, [])


const logInByGoogle = ()=>{
    setLoading(true)
    return  signInWithPopup(auth, googleProvider)
  }
  
  const LogInByGithub =()=>{
    setLoading(true)
      return signInWithPopup(auth, GithubProvider)
  }
  
  const RegisterByEmailPassword =(email,password)=>{
    setLoading(true)
    return  createUserWithEmailAndPassword(auth, email, password)
  }
  
  
  const logInByEmailPassword =(email,password)=>{
    setLoading(true)
    return  signInWithEmailAndPassword(auth, email, password)
  }
  

  const logOut =()=>{
    setLoading(false)
     return signOut(auth)
        
  }




    const logInInfo = {
      oli:5,
      number,
      setNumber,
      user,
      logInByGoogle,
      LogInByGithub,
      RegisterByEmailPassword,
      logInByEmailPassword,
      logOut



    }
    return (
        <logInContext.Provider value={logInInfo}>
            {children}
        </logInContext.Provider>
    );
};

export default AuthContext;