import { css } from '@emotion/react';

const ClassCard = ({ objectName, isActive }: any) => {
  return (
    <div css={totalContainer(isActive)}>
      <h2>{objectName}</h2>
    </div>
  );
};

const totalContainer = (isActive: boolean) => css`
  width: 233px;
  height: 233px;
  background: #fdfcf3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 2px 2px 15px -5px;
  transition: all 0.1s ease-in-out;
  filter: ${isActive ? 'brightness(100%)' : 'brightness(50%)'};

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default ClassCard;
