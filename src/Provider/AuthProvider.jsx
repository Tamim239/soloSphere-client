/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../Firebase/firebase.config'

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  };

  const updateUser = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
      displayName: name, photoURL: photo
    })
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  };

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
  })
  return ()=> unsubscribe()
})

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes ={
  children: PropTypes.node
}