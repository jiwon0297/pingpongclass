/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';
import { setupInterceptorsTo } from '@utils/AxiosInterceptor';

interface PasswordFindProps {
  setTap: Function;
}

const PasswordFind = (props: PasswordFindProps) => {
  const { setTap } = props;
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const InterceptedAxios = setupInterceptorsTo(axios.create());

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const onClickLogin = (e) => {
    setTap('login');
  };
  const onClickFind = (e) => {
    InterceptedAxios.post('/users/password', {
      user_id: userId,
      email: userEmail,
    })
      .then(function (response) {
        alert('이메일을 확인해주세요.');
      })
      .catch(function (error) {
        alert('존재하지 않는 회원정보입니다.');
        console.log('실패', error);
      });
  };

  return (
    <div css={totalContainer}>
      <div className="div-title">
        <h2 className="title">비밀번호 찾기</h2>
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
            <div className="title-sub">이메일</div>
            <input
              onChange={(e) => onChangeEmail(e)}
              value={userEmail}
              className="input"
            />
          </div>
        </div>
      </div>

      <div className="buttons-div">
        <button className="button gray" onClick={onClickLogin}>
          로그인하러 가기
        </button>
        <button className="button pink" onClick={onClickFind}>
          찾기
        </button>
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

  .input-email {
    width: 150px;
  }

  button:first-of-type {
    margin-right: 1rem;
  }
`;

export default PasswordFind;
