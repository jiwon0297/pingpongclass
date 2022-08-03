/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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

  const onClickEmail = async () => {
    setTap('email');
    // const res = await axios.post('http://localhost:8080/api/login', {
    //   id: +userId,
    //   password: userPw,
    // });

    /*
      {
        "accessToken": "string",
        "accessTokenExpiresIn": 0,
        "grantType": "string",
        "refreshToken": "string"
      }
    */

    // console.log(res);
  };

  // const test = () => {
  //   console.log('유저아이디:', userId, '유저비밀번호', userPw);
  // };

  return (
    <div css={totalContainer}>
      <div>
        <h2>{tap === 'studentLogin' ? 'STUDENT' : 'TEACHER'}</h2>
      </div>
      <div>
        <div className="">
          <div>
            아이디 <input onChange={(e) => onChangeId(e)} value={userId} />
          </div>
          <div>
            비밀번호 <input onChange={(e) => onChangePw(e)} value={userPw} />
          </div>
        </div>
        <div>비밀번호 찾기</div>
      </div>
      <div className="buttons">
        <button className="pink-button" onClick={onClickEmail}>
          로그인
        </button>
        <button className="gray-button" onClick={onClickReturn}>
          돌아가기
        </button>
        {/* <button onClick={test}>뭐가 적혀있지?</button> */}
      </div>
    </div>
  );
};

const totalContainer = css`
  h2 {
    color: #332757;
    text-align: right;
    font-size: calc(1.5em + 2vw);
    margin: 2rem;
    span {
      color: #ffffff;
      background-color: #df5b73;
    }
  }

  .buttons {
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    text-align: right;
    margin: 2rem 0;

    button {
      width: 13vw;
      height: 6vh;
      border-radius: 30px;
      border: none;
      font-weight: 700;
      font-size: calc(0.2em + 1vw);
      cursor: pointer;
      color: #ffffff;
      font-size: 1rem;
    }

    .pink-button {
      color: #ffffff;
      background-color: #dd7e8f;
    }

    .blue-button {
      color: #ffffff;
      background-color: #7c99c6;
    }
    .gray-button {
      color: #ffffff;
      background-color: #b6b8bb;
    }
    button:first-child {
      margin-right: 1rem;
    }
  }
`;

export default Login;
