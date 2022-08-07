/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import { Cookies } from 'react-cookie';

https: interface MyPageModalStyle {
  close: any;
  changeContent: Function;
}

const MyPageModal = ({ close, changeContent }: MyPageModalStyle) => {
  const cookies = new Cookies();

  const onClickLogout = () => {
    alert('로그아웃 하시겠습니까?');
    cookies.remove('jwt-refreshToken');
    location.href = '/';
  };

  const onClick = () => {
    changeContent('myPage');
  };

  return (
    <div css={totalContainer}>
      <div className="navBar"></div>
      <div className="MyPageInfo">
        <div className="myPageModal">
          <div className="myPageNav">
            <CloseIcon
              fontSize={'large'}
              onClick={close}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <h3 onClick={onClickLogout}>로그아웃</h3>
          <h3 onClick={onClick}>마이페이지</h3>
        </div>
      </div>
    </div>
  );
};

const totalContainer = css`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 999;

  .myPageNav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }

  .myPageModal {
    width: 220px;
    height: 220px;
    padding: 20px;
    background-color: rgba(249, 249, 249);
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-shadow: 2px 2px 10px -5px;
    animation: fadeIns 0.4s;
  }

  .myPageModal h3 {
    cursor: pointer;
  }

  .MyPageInfo {
    height: 80%;
    width: 1000px;
    min-width: 1000px;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: end;
  }

  @keyframes fadeIns {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default MyPageModal;
