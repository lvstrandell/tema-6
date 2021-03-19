import React, { useEffect } from 'react'
import firebase from '../../config/firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../../config/auth';
import { StyledButton} from '../receipt'
import {
  ProfileContainer, 
  ProfileMain
} from '../../components/ProfilePage/index';


const Profile = () => {
  const router = useRouter();
  const {user, loading, isAuthenticated} = useAuth();

  useEffect(() => {
    console.log("The context", user)
  }, [user])

  const handleSignOut = async () => {
    await firebase.auth().signOut()
    router.push('/')
    alert('Du är nu utloggad')
  }

  if(loading) {
    return<h2>loading...</h2>
  };

  if(!isAuthenticated) {
    router.push('/loginsignup/login');
    return <h2>Du är inte inloggad</h2>
  };

  return (
    <ProfileMain>
      <ProfileContainer>
        <h2>Din Profil</h2>
        <p>{user.email}</p>
        <StyledButton onClick={handleSignOut}>Sign Out</StyledButton>
      </ProfileContainer>
    </ProfileMain>
  )
}

export default Profile;