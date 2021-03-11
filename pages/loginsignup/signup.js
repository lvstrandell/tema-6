import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import firebaseInstance from "../../config/firebase";
import LoginForm from '../../components/LoginForm/index';

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push("/loginsignup/login");

    try {
      await firebaseInstance.auth().createUserWithEmailAndPassword(email, password);
      console.log("Du har skapat en användare");
    } catch (error) {
      setError(error.message);
      console.log("Något gick fel");
    }
  };

  return (
    <div style={{marginTop: '15%'}}>
      <LoginForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Passord"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Registrera dig</button>
        {error && <p>{error}</p>}
      <Link href="/loginsignup/login">Har du redan en användare? Logga in</Link>
      </LoginForm>
    </div>
  );
};

export default Signup;