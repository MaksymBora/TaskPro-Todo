import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { LoginForm } from '@/components/LoginForm/LoginForm';

const AuthPage: FC = () => {
  const { id } = useParams<string>();

  return <div>{id === 'login' ? <LoginForm /> : <RegisterForm />}</div>;
};

export default AuthPage;
