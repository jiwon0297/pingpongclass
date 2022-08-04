/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';
// import axios from 'axios';

interface LoginProps {
  tap: string;
  setTap: Function;
}

const Login = (props: LoginProps) => {
  const { tap, setTap } = props;
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };

  const onClickReturn = () => {
    setTap('main');
  };

  const onClickLogin = async () => {
    setTap('login');
    axios
      .post('/auth/login', {
        id: userId,
        password: userPw,
      })
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      })
      .then(function () {
        // 항상 실행
      });

    // const res = await axios.post('http://localhost:8080/api/login', {
    //   id: +userId,
    //   password: userPw,
    // });

    // {
    //   "accessToken": "string",
    //   "accessTokenExpiresIn": 0,
    //   "grantType": "string",
    //   "refreshToken": "string"
    // }

    // console.log(res);
  };

  // const test = () => {
  //   console.log('유저아이디:', userId, '유저비밀번호', userPw);
  // };

  return (
    <div css={totalContainer}>
      <div className="text-div">
        <h2 className="title">
          {tap === 'studentLogin' ? 'STUDENT' : 'TEACHER'}
        </h2>
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
        <div className="text-small">비밀번호 찾기</div>
      </div>
      <div className="buttons-div">
        <button className="button pink" onClick={onClickLogin}>
          로그인
        </button>
        <button className="button gray" onClick={onClickReturn}>
          돌아가기
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
  padding-right: 5rem;

  .text-div {
    padding: 10px 20px;
  }

  .buttons-div {
    margin: 1rem 0;
    text-align: right;

    button:first-child {
      margin-right: 1rem;
    }
  }
`;

export default Login;
