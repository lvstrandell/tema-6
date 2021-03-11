import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { object, string } from "yup";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/router'
import ReturnButton from "../../components/ReturnButton";
import LoginForm from "../../components/LoginForm";
import { useAuth } from '../../config/auth';
import PageTitle from '../../components/PageTitle/index';

const schema = object().shape({
  email: string().required("Dette feltet er påkrevd"),
  password: string().required("Dette feltet er påkrevd"),
});

const Login = () => {
  const router = useRouter();
  const {user, loading, isAuthenticated} = useAuth();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data", data);
    router.push('/loginsignup/profile');
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  if(loading) {
    return<PageTitle>loading...</PageTitle>
  };

  if(isAuthenticated) {
    router.push('/loginsignup/profile');
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          name="email" 
          placeholder="Email" 
          ref={register} 
          />
        <input
          type="password"
          name="password"
          placeholder="Passord"
          ref={register}
        />
        <button type="submit">Logga in</button>
      <Link href="/loginsignup/signup">Har du ingen användare? klicka här</Link>
      </LoginForm>
      <ReturnButton><Link href="/">Tillbaka till startsidan</Link></ReturnButton>
    </div>
  );
};

export default Login;