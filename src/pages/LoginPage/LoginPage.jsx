//Redux
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };
  return (
    <>
      <LoginForm onSubmit={onLogin} />
    </>
  );
}
