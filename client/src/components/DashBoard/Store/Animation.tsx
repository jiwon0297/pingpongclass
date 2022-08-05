/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';

interface ModalDefaultType {
  onClickOpenModal: () => void;
}

const Animation = ({
  onClickOpenModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <div css={totalContainer}>
      <div className="Bbobkki">{children}</div>
      <br />
      <button className="button pink" onClick={onClickOpenModal}>
        확인
      </button>
    </div>
  );
};

const totalContainer = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  animation: 0.7s ease-in-out loadEffect1;

  .Bbobkki {
    width: 40%;
    height: 50%;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    z-index: 10000;
  }

  @keyframes loadEffect1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Animation;
