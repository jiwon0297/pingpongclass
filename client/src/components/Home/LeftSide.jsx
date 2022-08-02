/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainLogo from '../../assets/images/mainLogo.png';
import MainPicture from '../../assets/images/mainPicture.png';

function LeftSide() {
  return (
    <div css={totalContainer}>
      <img src={MainLogo} alt="기본로고" className="main-logo" />
      <img src={MainPicture} alt="기본사진" className="main-picture" />
    </div>
  );
}

const totalContainer = css`
  margin-left: 5vw;
  width: 45%;
  align-items: center;
  display: flex;
  flex-direction: column;

  .main-logo {
    max-width: 40%;
    min-width: 30%;
    height: auto;
  }

  .main-picture {
    max-width: 100%;
    min-width: 40%;
    height: auto;
  }
`;

export default LeftSide;
