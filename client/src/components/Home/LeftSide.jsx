/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainLogo from '../../assets/images/mainLogo.png';
import MainPicture from '../../assets/images/mainPicture.png';

function LeftSide() {
  return (
    <div css={TotalContainer}>
      <img src={MainLogo} alt="기본로고" className="main-logo" />
      <img src={MainPicture} alt="기본사진" className="main-picture" />
    </div>
  );
}

const TotalContainer = css`
  margin-left: 4vw;
  width: 40%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .main-logo {
    width: 200px;
  }

  .main-picture {
    width: 700px;
  }
`;

export default LeftSide;

