/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainLogo from '../../images/image1.png';

function LeftSide() {
  return (
    <div css={totalContainer}>
      <img src={MainLogo} alt="움직이는 기본로고" />
    </div>
  );
}

const totalContainer = css`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 450px;
  }
`;

export default LeftSide;
