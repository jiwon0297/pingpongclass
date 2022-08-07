/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { setupInterceptorsTo } from '@utils/AxiosInterceptor';
import { setCookie } from '@utils/cookie';
import { useEffect, useState } from 'react';
import { saveMember, logIn, logOut, getMemberInfo } from '@src/store/member';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';

const App = () => {
  const [id, setId] = useState(0);
  const [password, setPassword] = useState('');
  const [accessToken, setToken] = useState('');
  const InterceptedAxios = setupInterceptorsTo(axios.create());
  const dispatch = useAppDispatch();
  const memberStore = useAppSelector((state) => state.member);

  // useEffect(() => {
  //   console.log(memberStore);
  // }, [memberStore]);

  const login = async () => {
    const result = await InterceptedAxios.post('/auth/login', {
      id: id,
      password: password,
    });
    return result;
  };

  const go = async () => {
    const result = await login();
    setToken(result.data.accessToken);
    if (result.data) {
      setCookie('jwt-accessToken', result.data.accessToken, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
      setCookie('jwt-refreshToken', JSON.stringify(result.data), {
        path: '/',
        // secure: true,
        sameSite: 'Lax',
        // httpOnly: true,
      });
      // 로그인한 회원 정보 저장
      dispatch(saveMember(id)).then(() => {
        console.log(memberStore);
      });
    }
  };

  return (
    <div className="App" css={totalContainer}>
      <div>
        <p>ID: </p>
        <input onChange={(e) => setId(+e.target.value)} type="number" />
      </div>
      <div>
        <p>PASSWORD: </p>
        <input onChange={(e) => setPassword(e.target.value)} type="text" />
      </div>
      <button onClick={go}>로그인</button>
    </div>
  );
};

const totalContainer = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export default App;
