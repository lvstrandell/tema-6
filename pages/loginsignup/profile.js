import React, { useEffect } from 'react'
import firebase from '../../config/firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../../config/auth';
import ReturnButton from '../../components/ReturnButton/index';
import Link from 'next/link'


const Profile = () => {
  const router = useRouter();
  const {user, loading, isAuthenticated} = useAuth();

  useEffect(() => {
    console.log("The context", user)
  }, [user])

  const handleSignOut = async () => {
    await firebase.auth().signOut()
    router.push('/')
  }

  if(loading) {
    return<h2>loading...</h2>
  };

  if(!isAuthenticated) {
    router.push('/loginsignup/login');
    return <h2>Du är inte inloggad</h2>
  };

  // if(!user) {
  //   return (
  //     <div style={{marginTop: '15%'}}>
  //       <h2> Du är inte inloggad</h2>
  //       <ReturnButton><Link href="/">Tillbaka till startsidan</Link></ReturnButton>
  //     </div>
  //   )
  // }
  return (
    <section style={{marginTop: '15%'}}>
      <h2>Profil</h2>
      <p>{user.email}</p>
      <p>{user.uid}</p>
      <button onClick={handleSignOut}>Sign Out</button>
      <ReturnButton><Link href="/">Tillbaka till startsidan</Link></ReturnButton>
    </section>
  )
}

export default Profile;