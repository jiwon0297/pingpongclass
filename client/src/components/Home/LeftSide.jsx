/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
<<<<<<< HEAD
import MainLogo from '../../images/image1.png';
=======
import MovingLogo from '../../assets/images/movingLogo.gif';
>>>>>>> 566e86fc1ba92ae3e4f9c221216d8249d721dbab

function LeftSide() {
  return (
    <div css={totalContainer}>
      <img src={MainLogo} alt="로고" />
    </div>
  );
}

const totalContainer = css`
  margin-left: 4vw;
  width: 40%;
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    min-width: 40%;
    height: auto;
  }
`;

export default LeftSide;
