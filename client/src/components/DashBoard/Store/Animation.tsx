/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface ModalDefaultType {
  onClickOpenModal: () => void;
}

const Animation = ({
  onClickOpenModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <div css={totalContainer}>
      <div className="Bbobkki">
        {children}
        <br />
        <motion.button
          className="button pink"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClickOpenModal}
          style={{ zIndex: '10003' }}
        >
          확인{' '}
        </motion.button>
      </div>
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  animation: 0.7s ease-in-out loadEffect1;

  .Bbobkki {
    width: 40%;
    height: 50%;
    align-items: center;
    border: none;
    background-color: transparent;
    z-index: 10000;
    justify-content: center;
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
