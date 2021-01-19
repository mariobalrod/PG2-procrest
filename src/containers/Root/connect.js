import { useCallback, useState } from 'react';
import useAuth from '../../data/hooks/useAuth';
import useMe from '../../data/hooks/useMe';

const useConnect = () => {
  const { login, register, isLoading: authLoading } = useAuth();
  const { me, isLoading: meLoading } = useMe();
  const [emailL, setEmailL] = useState("");
  const [passwordL, setPasswordL] = useState("");
  const [emailR, setEmailR] = useState("");
  const [username, setUsername] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const handleSubmitL = useCallback(() => {
    login({
      identifier: emailL,
      password: passwordL,
    });
    setEmailL('');
    setPasswordL('');
  }, [login, emailL, passwordL]);

  const handleChangeEmailL = (e) => {
    setEmailL(e.target.value);
  };

  const handleChangePasswordL = (e) => {
    setPasswordL(e.target.value);
  };

  const handleSubmitR = useCallback(() => {
    register({
      username: username,
      email: emailR,
      password: passwordR,
    });
    setEmailR('');
    setPasswordR('');
    setUsername('');
  }, [register, username, emailR, passwordR]);

  const handleChangeEmailR = (e) => {
    setEmailR(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePasswordR = (e) => {
    setPasswordR(e.target.value);
  };

  return {
    isLoading: meLoading || authLoading,
    emailL,
    passwordL,
    handleSubmitL,
    handleChangeEmailL,
    handleChangePasswordL,
    emailR,
    passwordR,
    username,
    handleSubmitR,
    handleChangeEmailR,
    handleChangePasswordR,
    handleChangeUsername,
    me,
  };
}

export default useConnect;