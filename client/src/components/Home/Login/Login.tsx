import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';
import { idText } from 'typescript';

interface LoginProps {
  tap: string;
  setTap: Function;
  userId: string;
  setUserId: Function;
}

const Login = (props: LoginProps) => {
  const { tap, setTap } = props;
  const { userId, setUserId } = props;
  const [userPw, setUserPw] = useState('');
  const [accessToken, setToken] = useState('');

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };

  const onClickFind = () => {
    setTap('passwordFind');
  };

  const onClickReturn = () => {
    setTap('main');
  };

  const onClickLogin = async () => {
    //유효성 검사
    // if(userId.length <7)

    axios
      .post('/auth/login', {
        id: userId,
        password: userPw,
      })
      .then(function (response) {
        //성공
        setToken(response.data.accessToken);
        localStorage.setItem('accessToken', accessToken);

        if (response.data.first) {
          alert('로그인 성공. 첫 로그인시, 정보입력이 필요합니다.');
          setTap('email');
        } else {
          alert('로그인 성공');
          location.href = '/dashboard';
        }
        console.log('로그인 성공', response);
      })
      .catch(function (error) {
        console.log('로그인 실패', error);
      });
  };

  return (
    <div css={totalContainer}>
      <div className="div-title">
        <h2 className="title">로그인</h2>
      </div>
      <div className="div-total">
        <div className="div-main">
          <div className="div-sub">
            <div className="title-sub">아이디</div>
            <input
              onChange={(e) => onChangeId(e)}
              value={userId}
              className="input"
            />
          </div>
          <div className="div-sub">
            <div className="title-sub">비밀번호</div>
            <input
              onChange={(e) => onChangePw(e)}
              type="password"
              value={userPw}
              className="input"
              css={css`
                font-family: 'Courier New', Courier, monospace;
              `}
            />
          </div>
        </div>
        <div
          className="text-small hover"
          onClick={onClickFind}
          css={css`
            cursor: pointer;
          `}
        >
          비밀번호 찾기
        </div>
      </div>
      <div className="buttons-div">
        <button className="button gray" onClick={onClickReturn}>
          이전
        </button>
        <button className="button pink" onClick={onClickLogin}>
          로그인
        </button>
        {/* <button onClick={test}>뭐가 적혀있지?</button> */}
      </div>
    </div>
  );
};

const totalContainer = css`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 7rem;

  .div-title {
    height: 9vh;
  }
  .div-total {
    height: 24vh;
    margin-bottom: 13px;
  }

  button:first-of-type {
    margin-right: 1rem;
  }
`;

export default Login;
